const { GraphQLSchema } = require("graphql");
const { delegateToSchema } = require("apollo-server-express");

const { Occupation } = require("../models/Occupation");
const { ConnectPeople } = require("../models/ConnectPeople");
const { SocialMedia } = require("../models/SocialMedia");

function buildQuery() {
  return {
    occupation: async (_, { id }) => {
      try {
        const occupation = await Occupation.findById({ _id: id }).exec();

        const connectedPeople = await ConnectPeople.find({
          _id: { $in: occupation.connectPeople },
        }).exec();

        const occupationData = occupation.toObject();

        return {
          ...occupationData,
          connectPeople: connectedPeople,
        };
      } catch (e) {
        throw new Error(e.message);
      }
    },

    occupations: async () => {
      try {
        const occupations = await Occupation.find({}).populate().exec();
        const allOccupations = [];
        await Promise.all(
          occupations.map(async (item) => {
            const connectedPeople = await ConnectPeople.find({
              _id: { $in: item.connectPeople },
            }).exec();

            allOccupations.push({
              ...item.toObject(),
              connectPeople: connectedPeople,
            });
          })
        );

        return allOccupations;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    connectPeople: async (root, args, context, info) => {
      return await ConnectPeople.find({}).populate().exec();
    },

    socialMedia: async (root, args, context, info) => {
      return await SocialMedia.find({}).populate().exec();
    },
  };
}

exports.buildQuery = buildQuery;
