const {
  Occupation,
  ConnectPeople,
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

        const experience = await Experience.find({
          _id: { $in: occupation.experience },
        }).exec();

        const jobDescription = await JobDescription.find({
          _id: { $in: occupation.jobDescription },
        }).exec();

        const occupationData = occupation.toObject();

        return {
          ...occupationData,
          connectPeople: connectedPeople,
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
            const connectedPeople = await ConnectPeople.find({
              _id: { $in: item.connectPeople },
            }).exec();

            const experience = await Experience.find({
              _id: { $in: item.experience },
            }).exec();

            const jobDescription = await JobDescription.find({
              _id: { $in: item.jobDescription },
            }).exec();

            allOccupations.push({
              ...item.toObject(),
              connectPeople: connectedPeople,
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
        return await ConnectPeople.find({ occupationID: occupationID })
          .populate()
          .exec();
      } catch (e) {
        throw new Error(e.message);
      }
    },

    connectPeople: async () => {
      try {
        return await ConnectPeople.find({}).populate().exec();
      } catch (e) {
        throw new Error(e.message);
      }
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
