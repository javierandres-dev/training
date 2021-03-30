"use strict";
import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "Welcome" });
});

router.get("/tasks", (req, res) => {
  res.send({ message: "... get method ..." });
});

router.post("/tasks", async (req, res) => {
  console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  await newTask.save();
  console.log(newTask);
  res.json("... post method ...");
});

export default router;
