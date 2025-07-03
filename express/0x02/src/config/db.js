// This file connects to a MongoDB database using Mongoose.
import mongoose from "mongoose";

// Ensure that the MONGODB_ATLAS_URI environment variable is set
if (!process.env.MONGODB_ATLAS_URI) {
  console.error("MONGODB_ATLAS_URI environment variable is not set.");
  process.exit(1); // Exit the process with failure
}

// Function to connect to MongoDB using Mongoose
/**
 * Connects to the MongoDB database using Mongoose.
 * Logs success or failure messages to the console.
 * Exits the process if the connection fails.
 */
// @returns {Promise<void>} A promise that resolves when the connection is successful.
// @throws {Error} If the connection fails, an error is logged and the process exits
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
// This code connects to a MongoDB database named 'express' using Mongoose.
// It handles connection errors and logs success or failure messages to the console.
// The connection string can be modified to connect to a different database or host.
// Make sure MongoDB is running locally or adjust the connection string accordingly.
