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
});

const ConnectPeople = mongoose.model("ConnectPeople", connectPeopleSchema);

module.exports = { ConnectPeople };
