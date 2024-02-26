const { Schema, model } = require("mongoose");

const uploadSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { data: Buffer, contentType: String },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("uploadModel", uploadSchema);
