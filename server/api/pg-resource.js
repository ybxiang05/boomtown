function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: "INSERT INTO users (email, fullname, password) VALUES($1, $2, $3) RETURNING *;",
        values: [email, fullname, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        //rows is a property of the object that contains the result from database; rows[0] as INSERT of newest user
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email = $1",
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      /** for my own reference:
       *
       *  Inside of our resource methods we get to determine when and how errors are returned
       *  to our resolvers using try / catch / throw semantics.
       *
       *  Ideally, the errors that we'll throw from our resource should be able to be used by the client
       *  to display user feedback. This means we'll be catching errors and throwing new ones.
       *
       *  Errors thrown from our resource will be captured and returned from our resolvers.
       *
       *  This will be the basic logic for this resource method:
       *  1) Query for the user using the given id. If no user is found throw an error.
       *  2) If there is an error with the query (500) throw an error.
       *  3) If the user is found and there are no errors, return only the id, email, fullname, bio fields.
       *     -- this is important, don't return the password!
       *
       */

      try {
        const findUserQuery = {
          text: "SELECT * FROM users WHERE id = $1",
          values: [id]
        };

        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (error) {
        throw `${error}, User is not found`;
      }
    },
    async getItems(idToOmit) {
      try {
        const itemsQuery = {
          text: `SELECT * FROM items WHERE ownerid != $1`,
          values: idToOmit ? [idToOmit] : []
        };
        const items = await postgres.query(itemsQuery);
        return items.rows;
      } catch (error) {
        throw (error, "Item(s) not found");
      }
    },
    async getItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE ownerid = $1`,
          values: [id]
        });
        return items.rows;
      } catch (error) {
        throw (error, `Items not found`);
      }
    },
    async getBorrowedItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE borrowerid = $1`,
          values: [id]
        });
        return items.rows;
      } catch (error) {
        throw error;
      }
    },
    async getTags() {
      try {
        const tags = await postgres.query("SELECT * FROM tags");
        return tags.rows;
      } catch (error) {
        throw "tag does not exist";
      }
    },

    async getTagsForItem(id) {
      try {
        const tagsQuery = {
          text: `SELECT * FROM tags INNER JOIN itemtags ON tags.id = tagid WHERE itemid = $1;
          `,
          values: [id]
        };

        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (error) {
        throw error;
      }
    },
    async saveNewItem({ item, user }) {
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item requires 2 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll ue something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              const newItemQuery = {
                text: `INSERT INTO items (title, description, ownerid) VALUES($1, $2, $3) RETURNING *`,

                values: [title, description, user]
              };

              const newItem = await postgres.query(newItemQuery);
              const itemid = newItem.rows[0].id;

              const tagRelationQuery = {
                text: `INSERT INTO itemtags (tagid, itemid) VALUES ${tagsQueryString(
                  [...tags],
                  itemid,
                  ""
                )}`,
                values: tags.map(tag => tag.id)
              };

              await postgres.query(tagRelationQuery);

              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                resolve(newItem.rows[0]);
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
