const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

function buildQuery(schema) {
  return {
    getBook: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "getBook",
        args,
        context,
        info,
      });
    },
    queryBook: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "queryBook",
        args,
        context,
        info,
      });
    },
  };
}

exports.buildQuery = buildQuery;
