const {
  Occupation,
  ConnectPeople,
  SocialMedia,
  Experience,
  JobDescription,
} = require("../models");

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

        const experience = await Experience.find({
          _id: { $in: occupation.experience },
        }).exec();

        const jobDescription = await JobDescription.find({
          _id: { $in: occupation.jobDescription },
        }).exec();

        const occupationData = occupation.toObject();

        return {
          ...occupationData,
          connectPeople: people,
          experience: experience,
          jobDescription: jobDescription,
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

            const experience = await Experience.find({
              _id: { $in: item.experience },
            }).exec();

            const jobDescription = await JobDescription.find({
              _id: { $in: item.jobDescription },
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
              experience: experience,
              jobDescription: jobDescription,
            });
          })
        );

        return allOccupations;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    getConnectedPeople: async (_, { occupationID }) => {
      try {
        const people = await ConnectPeople.find({ occupationID: occupationID })
          .populate()
          .exec();
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

    getExperience: async (_, { occupationID }) => {
      return await Experience.find({ occupationID: occupationID })
        .populate()
        .exec();
    },

    experience: async () => {
      return await Experience.find({}).populate().exec();
    },

    jobDescription: async (_, { id }) => {
      return await JobDescription.find({ _id: id }).populate().exec();
    },
  };
}

exports.buildQuery = buildQuery;
