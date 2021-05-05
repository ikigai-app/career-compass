const {
  Occupation,
  ConnectPeople,
  SocialMedia,
  Experience,
} = require("../models");

function buildMutation() {
  return {
    //occupation
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

    deleteOccupation: async (_, { id }) => {
      try {
        const occupationDel = await Occupation.findByIdAndRemove(id).exec();

        const connectedPeople = await ConnectPeople.find({
          occupationID: { $in: id },
        }).exec();

        connectedPeople.map(async (connect) => {
          const socialDel = await SocialMedia.deleteMany({
            _id: connect.socialMedia,
          });
        });

        await ConnectPeople.deleteMany({
          _id: occupationDel.connectPeople,
        });

        await Experience.deleteMany({
          _id: occupationDel.experience,
        });

        return true;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    //connectPeople
    addConnectPeople: async (root, { input, id }, context, info) => {
      const newPeople = await new ConnectPeople({
        name: input.name,
        description: input.description,
        profilePic: input.profilePic,
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

    updateConnectedPeople: async (root, args) => {
      return new Promise((resolve, reject) => {
        ConnectPeople.findByIdAndUpdate(
          args.id,
          { $set: { ...args.input } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    deleteConnectPeople: async (root, { id, parentID }) => {
      try {
        const peopleDel = await ConnectPeople.findByIdAndRemove(id).exec();
        await Occupation.findByIdAndUpdate(
          parentID,
          { $pull: { connectPeople: id } },
          { new: true }
        ).exec();

        await SocialMedia.deleteMany({
          _id: peopleDel.socialMedia,
        });

        return true;
      } catch (e) {
        throw new Error(e.message);
      }
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

    deleteSocialMedia: async (_, { id }) => {
      try {
        await SocialMedia.findByIdAndRemove(id).exec();
        return true;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    addExperience: async (root, { id, input }, context, info) => {
      const experience = await new Experience({
        type: input.type,
        description: input.description,
        url: input.url,
        occupationID: id,
      });

      try {
        const result = await new Promise((resolve, reject) => {
          experience.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        const occupation = await Occupation.findById(id);

        if (!occupation) {
          throw new Error("Occupation not found.");
        }

        occupation.experience.push(result._id);
        await occupation.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    updateExperience: async (root, args) => {
      return new Promise((resolve, reject) => {
        Experience.findByIdAndUpdate(
          args.id,
          { $set: { ...args.input } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    deleteExperience: async (root, { id, parentID }) => {
      try {
        await Experience.findByIdAndRemove(id).exec();
        await Occupation.findByIdAndUpdate(
          parentID,
          { $pull: { experience: id } },
          { new: true }
        ).exec();

        return true;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  };
}

exports.buildMutation = buildMutation;
