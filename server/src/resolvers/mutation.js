const { GraphQLSchema, SelectionSetNode, Kind } = require("graphql");
const { delegateToSchema, WrapQuery } = require("apollo-server-express");

function buildMutation(schema) {
  return {
    addCandidateName: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["addCandidateName"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "candidateName" },
          selectionSet: subtree,
        }),
        (result) => result.candidateName[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "addCandidateName",
        args: {
          input: {
            FormattedName: args.input.FormattedName,
            GivenName: args.input.GivenName,
            FamilyName: args.input.FamilyName,
          },
        },
        context,
        info,
        transforms: [wrap],
      });
      return result;
    },

    // addUser: async (root, args, context, info) => {
    //   const wrap = new WrapQuery(
    //     ["addUser"],
    //     (subtree) => ({
    //       kind: Kind.FIELD,
    //       name: { kind: Kind.NAME, value: "user" },
    //       selectionSet: subtree,
    //     }),
    //     (result) => result.user[0]
    //   );
    //   const result = await delegateToSchema({
    //     schema,
    //     operation: "mutation",
    //     fieldName: "addUser",
    //     args: {
    //       input: {
    //         userName: args.input.userName,
    //         resumeData: args.input.resumeData,
    //       },
    //     },
    //     context,
    //     info,
    //     transforms: [wrap],
    //   });
    //   return result;
    // },
  };
}

exports.buildMutation = buildMutation;
