const mongoose = require("mongoose");

export const Msg = mongoose.model("Msg", { message: String });
