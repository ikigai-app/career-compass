const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const occupationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  connectPeople: [
    {
      type: Schema.Types.ObjectId,
      ref: "ConnectPeople",
    },
  ],
});

const Occupation = mongoose.model("occupation", occupationSchema);

module.exports = { Occupation };