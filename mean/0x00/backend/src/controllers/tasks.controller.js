const TaskModel = require("../models/tasks.model");

const tasksCrontroller = {
  createTask: async (req, res) => {
    try {
      const newTask = new TaskModel({
        name: req.body.name,
        completed: false,
      });
      const created = await newTask.save();
      if (created) res.json({ created: created._id });
      else throw new Error("task not created");
    } catch (error) {
      res.json({
        error: error.message || "An error occurred creating the task",
      });
    }
  },

  readTasks: async (req, res) => {
    try {
      const allTasks = await TaskModel.find();
      res.json({ allTasks });
    } catch (error) {
      res.json({ error });
    }
  },

  readTask: async (req, res) => {
    try {
      const task = await TaskModel.findById(req.params.id);
      if (task) res.json({ task });
      else throw new Error("task not found");
    } catch (error) {
      res.json({
        error: error.message || "An error occurred reading the task",
      });
    }
  },

  updateTask: async (req, res) => {
    try {
      const updated = await TaskModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updated) res.json({ updated: updated._id });
      else throw new Error("task not found");
    } catch (error) {
      res.json({
        error: error.message || "An error occurred updating the task",
      });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const deleted = await TaskModel.findByIdAndDelete(req.params.id);
      if (deleted) res.json({ deleted: deleted._id });
      else throw new Error("task not found");
    } catch (error) {
      res.json({
        error: error.message || "An error occurred deleting the task",
      });
    }
  },
};

module.exports = tasksCrontroller;
