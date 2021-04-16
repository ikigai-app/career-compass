const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

function buildQuery(schema) {
  return {
    getUser: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "getUser",
        args,
        context,
        info,
      });
    },
    queryUser: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "queryUser",
        args,
        context,
        info,
      });
    },

    getOccupation: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "getOccupation",
        args,
        context,
        info,
      });
    },
    queryOccupation: async (root, args, context, info) => {
      return await delegateToSchema({
        schema,
        operation: "query",
        fieldName: "queryOccupation",
        args,
        context,
        info,
      });
    },
  };
}

exports.buildQuery = buildQuery;
