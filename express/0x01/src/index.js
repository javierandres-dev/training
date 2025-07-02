import express from "express";
import morgan from "morgan";

const server = express();
const PORT = 4100;

// Middleware
server.use(express.json()); // Parse JSON bodies
server.use(morgan("dev")); // Log HTTP requests

server.get("/", (req, res) => {
  res.json({
    message: "root, works!",
  });
});

/* const students = [
  { id: 1, name: "Anne" },
  { id: 2, name: "Jane" },
  { id: 3, name: "John" },
]; */

const students = [];

// create
server.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(newStudent);
  res.status(201).json({
    message: "POST student",
    data: newStudent,
  });
});

// read all
server.get("/students", (req, res) => {
  res.json({
    message: "GET students",
    data: students,
  });
});

//read
server.get("/students/:id", (req, res) => {
  res.json({
    message: "GET student by ID",
    data: students[req.params.id - 1] || null,
  });
});

// update
server.put("/students/:id", (req, res) => {
  const studentId = req.params.id - 1;
  if (students[studentId]) {
    students[studentId].name = req.body.name;
    res.json({
      message: "PUT student",
      data: students[studentId],
    });
  } else {
    res.status(404).json({
      message: "Student not found",
      data: null,
    });
  }
});

// delete
server.delete("/students/:id", (req, res) => {
  const studentId = req.params.id - 1;
  if (students[studentId]) {
    const deletedStudent = students.splice(studentId, 1);
    res.json({
      message: "DELETE student",
      data: deletedStudent[0],
    });
  } else {
    res.status(404).json({
      message: "Student not found",
      data: null,
    });
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// To run the server, use the command: npm run dev
// To start the server in development mode with nodemon, use: npm run dev
// To start the server in production mode, use: npm start
// Ensure you have nodemon installed globally or as a dev dependency to use the `dev`
// script. You can install it using: npm install -g nodemon
// or as a dev dependency: npm install --save-dev nodemon
// This code sets up a basic Express server that listens on port 3000 and responds with
// "Hello, Express!" when the root URL is accessed. The server can be started in
// development mode using nodemon, which automatically restarts the server when files
// change, or in production mode using the standard Node.js command.
// The package.json file has been updated to include the necessary scripts and
// dependencies for running the Express server. The "type": "module" field allows the
// use of ES module syntax (import/export) in Node.js, which is required for the
// import statement used in this code.
// The server is set up to handle GET requests to the root URL ("/") and sends a
// simple text response. You can expand this server by adding more routes and
// middleware as needed for your application.
