const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

function buildQuery(schema) {
  return {
    // getUser: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "getUser",
    //     args,
    //     context,
    //     info,
    //   });
    // },
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
    // queryCandidateName: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryCandidateName",
    //     args,
    //     context,
    //     info,
    //   });
    // },
  };
}

exports.buildQuery = buildQuery;
