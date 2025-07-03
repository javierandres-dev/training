// Importing dotenv to load environment variables
import "dotenv/config";
// Importing the database connection configuration
import connectDB from "./config/db.js";
// Importing the express framework
import express from "express";
// Importing the morgan middleware for logging HTTP requests
import morgan from "morgan";
// Importing the students routes
import studentsRouter from "./routers/students.js";

// Create an instance of the express application
const server = express();
const host = process.env.HOST; // Set the host from environment variables
const port = process.env.PORT; // Set the port from environment variables

// Middlewares
server.use(express.json()); // Parse incoming JSON requests
server.use(morgan("dev")); // Use morgan for logging HTTP requests

// Connect to the database
connectDB();

// Define a simple route
server.get("/", (req, res) => {
  res.status(204).send(); // Respond with a 204 No Content status
});

// Use the students routes for any requests to /students
server.use("/students", studentsRouter);

// start the server
server.listen(port, () => {
  console.log(`Server is running at ${host} on port ${port}`);
});
