const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const connectPeopleSchema = new mongoose.Schema({
  occupationID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  profilePic: String,
  socialMedia: [
    {
      type: Schema.Types.ObjectId,
      ref: "SocialMedia",
    },
  ],
});

const ConnectPeople = mongoose.model("connectpeople", connectPeopleSchema);

module.exports = { ConnectPeople };
