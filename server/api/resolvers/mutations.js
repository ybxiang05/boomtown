const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 1000 * 2
  });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user; // Omit the password from the token
  const token = jwt.sign({ id, email, fullname, bio }, secret, { expiresIn: "2h" }); //can also be 60 * 60 * 2
  return token;
}

const mutationResolvers = app => ({
  async signup(parent, { user: { fullname, email, password } }, { pgResource, req }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await pgResource.createUser({
        fullname,
        email,
        password: hashedPassword
      });

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(parent, { user: { email, password } }, { pgResource, req }) {
    try {
      const user = await pgResource.getUserAndPasswordForVerification(email);
      if (!user) throw "User was not found.";

      // Use bcrypt to compare the provided password to 'hashed' password stored in your database.
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw "Invalid Password";

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async logout(parent, args, context) {
    //make robust by adding try catch
    try {
      context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
      return true;
    } catch (error) {
      throw error;
    }
  },
  async addItem(parent, args, context, info) {
    try {
      const { pgResource } = context;
      const user = await jwt.decode(context.token, app.get("JWT_SECRET"));
      console.log(args.item);
      const { item } = args;
      const newItem = await pgResource.saveNewItem({
        item,
        user: user.id
      });
      return newItem;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
});

module.exports = mutationResolvers;
