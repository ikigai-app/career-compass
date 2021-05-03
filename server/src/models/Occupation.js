const mongoose = require("mongoose");

const occupationSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Occupation = mongoose.model("Occupation", occupationSchema);

module.exports = { Occupation };
