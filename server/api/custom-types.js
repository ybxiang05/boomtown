const { GraphQLScalarType } = require("graphql");

/**
 *  GraphQL includes the following built-in Scalar Types: https://graphql.org/learn/schema/#scalar-types
 *
 *  The purpose of the Scalar type is to validate the information being sent and received
 *  from our GraphQL API.
 *
 *  Apollo allows us to define our own custom types. We'll create our own custom type to handle the value from the 'created' field
 *  on the Item: https://www.apollographql.com/docs/graphql-tools/scalars.html
 *
 */

const DateScalar = undefined;
// -------------------------------

module.exports = {
  DateScalar
};
