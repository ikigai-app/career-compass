// const { GraphQLSchema, SelectionSetNode, Kind } = require("graphql");
// const { delegateToSchema, WrapQuery } = require("apollo-server-express");
const { Occupation } = require("../models/Occupation");
const { ConnectPeople, SocialMedia } = require("../models/ConnectPeople");

function buildMutation() {
  return {
    addOccupation: async (root, args, context, info) => {
      const occupation = new Occupation({
        name: args.input.name,
        description: args.input.description,
      });
      await occupation.save();
      return occupation;
    },

    updateOccupation: async (root, args, context, info) => {
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

    deleteOccupation: async (root, { id }, context, info) => {
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

        occupation.connectPeople.push(newPeople);
        await occupation.save();

        // Occupation.findOneAndUpdate(
        //   { _id: id },
        //   { $push: { connectPeople: newPeople } },
        //   function (error, success) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log("success", success);
        //     }
        //   }
        // );

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    deleteConnectPeople: async (root, { id }, context, info) => {
      return new Promise((resolve, reject) => {
        ConnectPeople.findByIdAndDelete(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    addSocialMedia: async (root, { input, id }, context, info) => {
      const newSocialMedia = await new SocialMedia({
        type: input.type,
        url: input.url,
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

        person.socialMedia.push(newSocialMedia);
        await person.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    // deleteConnectPeople: async (root, { id }, context, info) => {
    //   return new Promise((resolve, reject) => {
    //     ConnectPeople.findByIdAndDelete(id).exec((err, res) => {
    //       err ? reject(err) : resolve(res);
    //     });
    //   });
    // },
  };
}

exports.buildMutation = buildMutation;
