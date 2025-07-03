import StudentModel from "../models/students.js"; // Importing the Student model to interact with the database

// This file contains the StudentsController which handles the logic for student-related operations
// It includes methods for creating, reading, updating, and deleting student records in the database.
const StudentsController = {
  create: async (req, res) => {
    try {
      const { fullName, birthDate, cohort, enrolled } = req.body;
      const newStudent = new StudentModel({
        fullName,
        birthDate,
        cohort,
        enrolled,
      });
      await newStudent.save();
      res.status(201).json({
        allOK: true,
        message: "Student created successfully",
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error creating student",
        error: error.message,
      });
    }
  },
  readAll: async (req, res) => {
    try {
      const students = await StudentModel.find();
      res.status(200).json({
        allOK: true,
        message: "All students retrieved successfully",
        data: students,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error retrieving students",
        error: error.message,
      });
    }
  },
  readOne: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await StudentModel.findById(id);
      if (!student) {
        return res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} retrieved successfully`,
        data: student,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error retrieving student",
        error: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { fullName, birthDate, cohort, enrolled } = req.body;
      const updatedStudent = await StudentModel.findByIdAndUpdate(
        id,
        { fullName, birthDate, cohort, enrolled },
        { new: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} updated successfully`,
        data: updatedStudent,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error updating student",
        error: error.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedStudent = await StudentModel.findByIdAndDelete(id);
      if (!deletedStudent) {
        return res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} deleted successfully`,
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error deleting student",
        error: error.message,
      });
    }
  },
};

// This object contains methods for handling student-related operations.
// Each method corresponds to a specific HTTP request type (POST, GET, PUT, DELETE)
// and performs the necessary database operations using the StudentModel.
// The methods handle errors and return appropriate responses to the client.
// The create method adds a new student to the database.
// The readAll method retrieves all students from the database.
// The readOne method retrieves a specific student by ID.
// The update method modifies an existing student's information by ID.
export default StudentsController;
