const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Query {
    msgs: [Msg!]!
  }

  type Msg {
    id: ID!
    message: String!
  }

  type Mutation {
    createMsg(message: String!): Msg!
  }
`;
