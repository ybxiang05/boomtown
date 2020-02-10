const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    /**
     *  Authentication - Server
     *
     *  The viewer is what we're calling the current user signed into your application.
     *  When the user signed in with their username and password, an JWT was created with
     *  the user's information cryptographically encoded inside.
     *
     *  To provide information about the user's session to the app, return the user.
     *  If there is no user, the user has signed out, in which case user will be null.
     */

    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      return await pgResource.getItems(filter);
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      return await pgResource.getTags();
    } catch (error) {
      throw new ApolloError(error);
    }
  }
});
module.exports = queryResolvers;
