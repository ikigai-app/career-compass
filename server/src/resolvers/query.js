const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

const { Occupation } = require("../models/Occupation");

function buildQuery() {
  return {
    occupation: async (root, { id }, context, info) => {
      return await Occupation.findById({ _id: id }).exec();
    },

    occupations: async (root, args, context, info) => {
      return await Occupation.find({}).populate().exec();
    },
    // queryOccupation: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryOccupation",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // //user-module
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
    // queryUser: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryUser",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // // occupation-module
    // getOccupation: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "getOccupation",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // queryOccupation: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryOccupation",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // queryConnectPeople: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryConnectPeople",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // queryJobDescription: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryJobDescription",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // queryExperience: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "queryExperience",
    //     args,
    //     context,
    //     info,
    //   });
    // },
    // querySocialMedia: async (root, args, context, info) => {
    //   return await delegateToSchema({
    //     schema,
    //     operation: "query",
    //     fieldName: "querySocialMedia",
    //     args,
    //     context,
    //     info,
    //   });
    // },
  };
}

exports.buildQuery = buildQuery;
