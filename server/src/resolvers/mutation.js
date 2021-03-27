const { GraphQLSchema, SelectionSetNode, Kind } = require("graphql");
const { delegateToSchema, WrapQuery } = require("apollo-server-express");

function buildMutation(schema) {
  return {
    addUser: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["addUser"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "user" },
          selectionSet: subtree,
        }),
        (result) => result.user[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "addUser",
        args: {
          input: {
            userName: args.input.userName,
            SovrenResponse: args.input.SovrenResponse,
          },
        },
        context,
        info,
        transforms: [wrap],
      });
      return result;
    },
  };
}

exports.buildMutation = buildMutation;
