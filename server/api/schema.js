const { gql } = require("apollo-server-express");

module.exports = gql`
  # scalar Date

  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String
    itemowner: User!
    tags: [Tag]
    created: String!
    borrower: User
  }

  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag {
    id: ID!
    title: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
  }

  input SignUpInput {
    fullname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    addItem(item: NewItemInput!): Item
    signup(user: SignUpInput!): AuthPayload!
    login(user: LoginInput!): AuthPayload!
    logout: Boolean!
  }
`;
