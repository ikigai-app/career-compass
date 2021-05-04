const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  personID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
});

const SocialMedia = mongoose.model("socialmedia", socialMediaSchema);

module.exports = { SocialMedia };
