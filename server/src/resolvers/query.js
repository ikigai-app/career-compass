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
        const people = [];

        await Promise.all(
          connectedPeople.map(async (connect) => {
            const social = await SocialMedia.find({
              _id: { $in: connect.socialMedia },
            })
              .populate()
              .exec();

            people.push({
              ...connect.toObject(),
              socialMedia: social,
            });
          })
        );

        const occupationData = occupation.toObject();

        return {
          ...occupationData,
          connectPeople: people,
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
            const people = [];
            const connectedPeople = await ConnectPeople.find({
              _id: { $in: item.connectPeople },
            }).exec();

            await Promise.all(
              connectedPeople.map(async (connect) => {
                const social = await SocialMedia.find({
                  _id: { $in: connect.socialMedia },
                })
                  .populate()
                  .exec();

                people.push({
                  ...connect.toObject(),
                  socialMedia: social,
                });
              })
            );

            allOccupations.push({
              ...item.toObject(),
              connectPeople: people,
            });
          })
        );

        return allOccupations;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    connectPeople: async () => {
      try {
        const people = await ConnectPeople.find({}).populate().exec();
        const data = [];
        await Promise.all(
          people.map(async (item) => {
            const social = await SocialMedia.find({
              _id: { $in: item.socialMedia },
            }).exec();

            data.push({
              ...item.toObject(),
              socialMedia: social,
            });
          })
        );

        return data;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    socialMedia: async () => {
      return await SocialMedia.find({}).populate().exec();
    },
  };
}

exports.buildQuery = buildQuery;
