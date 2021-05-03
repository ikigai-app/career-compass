const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

const { Occupation } = require("../models/Occupation");
const { ConnectPeople } = require("../models/ConnectPeople");

function buildQuery() {
  return {
    occupation: async (root, { id }, context, info) => {
      return await Occupation.findById({ _id: id }).exec();
    },

    occupations: async (root, args, context, info) => {
      return await Occupation.find({}).populate().exec();
    },

    connectPeoples: async (root, args, context, info) => {
      return await ConnectPeople.find({}).populate().exec();
    },
  };
}

exports.buildQuery = buildQuery;
