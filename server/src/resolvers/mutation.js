const { Occupation } = require("../models/Occupation");
const { ConnectPeople } = require("../models/ConnectPeople");
const { SocialMedia } = require("../models/SocialMedia");

function buildMutation() {
  return {
    addOccupation: async (root, args) => {
      const occupation = new Occupation({
        name: args.input.name,
        description: args.input.description,
      });

      return new Promise((resolve, reject) => {
        occupation.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    updateOccupation: async (root, args) => {
      return new Promise((resolve, reject) => {
        Occupation.findByIdAndUpdate(
          args.id,
          { $set: { ...args.input } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    deleteOccupation: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        Occupation.findByIdAndDelete(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    addConnectPeople: async (root, { input, id }, context, info) => {
      const newPeople = await new ConnectPeople({
        name: input.name,
        description: input.description,
        profilePic: input.profilePic,
        // socialMedia: input.socialMedia,
        occupationID: id,
      });

      try {
        const result = await new Promise((resolve, reject) => {
          newPeople.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        const occupation = await Occupation.findById(id);

        if (!occupation) {
          throw new Error("Occupation not found.");
        }

        occupation.connectPeople.push(result._id);
        await occupation.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    deleteConnectPeople: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        ConnectPeople.findByIdAndDelete(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    addSocialMedia: async (root, { input, id }) => {
      const newSocialMedia = await new SocialMedia({
        type: input.type,
        url: input.url,
        personID: id,
      });

      try {
        const result = await new Promise((resolve, reject) => {
          newSocialMedia.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        const person = await ConnectPeople.findById(id);

        if (!person) {
          throw new Error("Person not found.");
        }

        person.socialMedia.push(result._id);
        await person.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    deleteSocialMedia: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        SocialMedia.findByIdAndDelete(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  };
}

exports.buildMutation = buildMutation;
