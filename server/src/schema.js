require("graphql-import-node/register");
const typeDefs = require("./schema/schema.graphql");
const { makeExecutableSchema } = require("apollo-server-express");
const { buildResolvers } = require("./resolvers/index.js");

async function buildSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers: await buildResolvers(),
  });
}

exports.buildSchema = buildSchema;
