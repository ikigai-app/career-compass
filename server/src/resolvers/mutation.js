const { GraphQLSchema, SelectionSetNode, Kind } = require("graphql");
const { delegateToSchema, WrapQuery } = require("apollo-server-express");

function buildMutation(schema) {
  return {
    // add sections........
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
            InvalidSovrenJSON: args.input.InvalidSovrenJSON,
          },
        },
        context,
        info,

        transforms: [wrap],
      });
      return result;
    },

    //occupation-module
    addOccupation: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["addOccupation"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "occupation" },
          selectionSet: subtree,
        }),
        (result) => result.occupation[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "addOccupation",
        args: {
          input: {
            name: args.input.name,
            description: args.input.description,
            connectPeople: args.input.connectPeople,
            jobDescription: args.input.jobDescription,
            experience: args.input.experience,
          },
        },
        context,
        info,

        transforms: [wrap],
      });
      return result;
    },

    addConnectPeople: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["addConnectPeople"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "connectPeople" },
          selectionSet: subtree,
        }),
        (result) => result.connectPeople[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "addConnectPeople",
        args: {
          input: {
            name: args.input.name,
            description: args.input.description,
            profilePic: args.input.profilePic,
            socialMedia: args.input.socialMedia,
            occupationType: args.input.occupationType,
          },
        },
        context,
        info,

        transforms: [wrap],
      });
      return result;
    },

    // update sections........
    updateOccupation: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["updateOccupation"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "occupation" },
          selectionSet: subtree,
        }),
        (result) => result.occupation[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "updateOccupation",
        args: {
          input: {
            filter: { id: args.id },
            set: {
              name: args.input.name,
              description: args.input.description,
              connectPeople: args.input.connectPeople,
              jobDescription: args.input.jobDescription,
              experience: args.input.experience,
            },
          },
        },
        context,
        info,

        transforms: [wrap],
      });
      return result;
    },

    updateConnectPeople: async (root, args, context, info) => {
      const wrap = new WrapQuery(
        ["updateConnectPeople"],
        (subtree) => ({
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: "connectPeople" },
          selectionSet: subtree,
        }),
        (result) => result.connectPeople[0]
      );
      const result = await delegateToSchema({
        schema,
        operation: "mutation",
        fieldName: "updateConnectPeople",
        args: {
          input: {
            filter: { id: args.id },
            set: {
              name: args.input.name,
              description: args.input.description,
              profilePic: args.input.profilePic,
              socialMedia: args.input.socialMedia,
            },
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
