const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const connectPeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  profilePic: String,
  socialMedia: [
    {
      type: Schema.Types.Mixed,
      ref: "SocialMedia",
    },
  ],
});

const ConnectPeople = mongoose.model("ConnectPeople", connectPeopleSchema);

const socialMediaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);

module.exports = { ConnectPeople, SocialMedia };
