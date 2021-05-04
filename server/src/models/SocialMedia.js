const mongoose = require("mongoose");

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

const SocialMedia = mongoose.model("socialmedia", socialMediaSchema);

module.exports = { SocialMedia };
