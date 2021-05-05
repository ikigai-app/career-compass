const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SocialMedia = new mongoose.Schema({
  type: String,
  url: String,
});

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
  socialMedia: [SocialMedia],
});

const ConnectPeople = mongoose.model("connectpeople", connectPeopleSchema);

module.exports = { ConnectPeople };
