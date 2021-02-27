import { GraphQLSchema } from "graphql";
// import { delegateToSchema } from "graphql-tools";
import { delegateToSchema } from "apollo-server-express";

export function buildQuery(schema) {
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
