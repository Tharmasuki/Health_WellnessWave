const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    field: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);
