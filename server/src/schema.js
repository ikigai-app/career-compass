import "graphql-import-node";
import * as typeDefs from "./schema/schema.graphql";
// import { makeExecutableSchema } from "graphql-tools";
import { makeExecutableSchema } from "apollo-server-express";
import { buildResolvers } from "./resolvers";
import { GraphQLSchema } from "graphql";

const schema = require("./schema/schema.graphql");

export async function buildSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers: await buildResolvers(),
  });
}
