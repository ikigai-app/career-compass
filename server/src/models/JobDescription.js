const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Roles = new mongoose.Schema({ role: String });
const Skills1 = new mongoose.Schema({ skill1: String });
const Requirements = new mongoose.Schema({ requirement: String });

const descriptionSchema = new mongoose.Schema({
  occupationID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  roles: [Roles],
  skills1: [Skills1],
  requirements: [Requirements],
});

const JobDescription = mongoose.model("jobdescription", descriptionSchema);

module.exports = { JobDescription };
