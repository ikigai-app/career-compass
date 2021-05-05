const {
  Occupation,
  ConnectPeople,
  SocialMedia,
  Experience,
  JobDescription,
} = require("../models");

function buildMutation() {
  return {
    //occupation
    addOccupation: async (root, args) => {
      const occupation = new Occupation({
        name: args.input.name,
        description: args.input.description,
      });

      try {
        const result = await new Promise((resolve, reject) => {
          occupation.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        const description = await new JobDescription({
          occupationID: result._id,
        });

        const resultJobDescription = await new Promise((resolve, reject) => {
          description.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

        const checkOccupation = await Occupation.findById(result._id);

        if (!checkOccupation) {
          throw new Error("Occupation not found.");
        }

        checkOccupation.jobDescription.push(resultJobDescription._id);
        await checkOccupation.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
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

        await JobDescription.deleteMany({
          _id: occupationDel.jobDescription,
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

    // jobDescription

    addJobDescription: async (root, { id, input }) => {
      let data = "";

      if (input.type === "roles") {
        data = { role: input.value };
      } else if (input.type === "skills1") {
        data = { skill1: input.value };
      } else if (input.type === "requirements") {
        data = { requirement: input.value };
      }

      try {
        const jobDescription = await JobDescription.findById(id);

        if (!jobDescription) {
          throw new Error("JobDescription not found.");
        } else {
          if (input.type === "roles") {
            jobDescription.roles.push(data);
          } else if (input.type === "skills1") {
            jobDescription.skills1.push(data);
          } else if (input.type === "requirements") {
            jobDescription.requirements.push(data);
          }
          await jobDescription.save();
          return jobDescription;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    updateJobDescription: async (_, { jobDescriptionID, input }) => {
      try {
        const job = await JobDescription.find({ _id: jobDescriptionID })
          .populate()
          .exec();

        const { type, id, value } = input;

        let newArray = job[0][type];

        let obj = "";

        if (type === "roles") {
          obj = { _id: id, role: value };
        } else if (type === "skills1") {
          obj = { _id: id, skill1: value };
        } else if (type === "requirements") {
          obj = { _id: id, requirement: value };
        }

        let foundIndex = newArray.findIndex((x) => x._id == obj._id);
        newArray[foundIndex] = obj;

        const result = await JobDescription.findByIdAndUpdate(
          jobDescriptionID,
          { $set: { [type]: newArray } },
          { new: true }
        ).exec();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    deleteJobDescription: async (_, { jobDescriptionID, input }) => {
      try {
        const job = await JobDescription.find({ _id: jobDescriptionID })
          .populate()
          .exec();

        const { type, id } = input;

        let newArray = job[0][type];

        const filterArr = newArray.filter(function (item) {
          return String(item._id) !== id;
        });

        await JobDescription.findByIdAndUpdate(
          jobDescriptionID,
          { $set: { [type]: filterArr } },
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
