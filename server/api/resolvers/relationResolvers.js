const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items(parent, { id }, { pgResource }, info) {
      return await pgResource.getItemsForUser(parent.id);
    },
    async borrowed(parent, args, { pgResource }, info) {
      return await pgResource.getBorrowedItemsForUser(parent.id);
    }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      return await pgResource.getUserById(parent.ownerid);
    },
    async tags(parent, args, { pgResource }, info) {
      return await pgResource.getTagsForItem(parent.id);
    },
    async borrower(parent, args, { pgResource }, info) {
      return await pgResource.getUserById(parent.borrowerid);
    }
  }
};

module.exports = relationResolvers;
