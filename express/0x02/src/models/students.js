import { Schema, model } from "mongoose"; // Importing Schema and model from mongoose to define the schema and create a model

// This file defines the schema for a Student model in a MongoDB database using Mongoose.
// The schema outlines the structure of the student documents, including fields like name, age, email, enrolled status, and timestamps for creation and updates.
// It also includes validation rules such as required fields, unique email addresses, and default values for certain fields.
// The model is then exported for use in other parts of the application, allowing for easy interaction with the student data in the database.
const studentSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    cohort: {
      type: Number,
    },
    enrolled: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Student", studentSchema);
// This exports the Student model, which can be used to interact with the students collection in the MongoDB database.
