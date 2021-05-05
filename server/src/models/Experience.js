const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
  occupationID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

const Experience = mongoose.model("experience", experienceSchema);

module.exports = { Experience };
