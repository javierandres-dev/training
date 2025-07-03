// Importing the Router from express
import { Router } from "express";
// This allows us to create modular route handlers
// for our application, making it easier to manage and maintain the code.
// Importing the StudentsController which contains the logic for handling student-related requests
import StudentsController from "../controllers/students.js";
// This controller will handle the creation, retrieval, updating, and deletion of student records.
const studentsRouter = Router();
// This creates a new instance of the Router class from express.
// The Router instance will be used to define routes related to students.
studentsRouter.post("/", StudentsController.create);
studentsRouter.get("/", StudentsController.readAll);
studentsRouter.get("/:id", StudentsController.readOne);
studentsRouter.put("/:id", StudentsController.update);
studentsRouter.delete("/:id", StudentsController.delete);
// This sets up the routes for handling student-related requests.
// - POST /students: Create a new student
// - GET /students: Retrieve all students
// - GET /students/:id: Retrieve a specific student by ID
// - PUT /students/:id: Update a specific student by ID
// - DELETE /students/:id: Delete a specific student by ID
export default studentsRouter;
// This exports the studentsRouter so it can be used in other parts of the application.
// By exporting the router, we can import it in our main server file and use it to
// handle requests related to students. This modular approach helps keep the code organized and maintainable.
// The router can be mounted on a specific path (e.g., /students) in the main server file,
// allowing us to group all student-related routes together. This makes it easier to manage
// and scale the application as it grows.
// The router can also be extended in the future to include more routes related to students,
// such as searching for students, filtering by certain criteria, or handling more complex operations.
