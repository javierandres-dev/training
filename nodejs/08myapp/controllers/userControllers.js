"use strict";
const User = require("../models/User");
// create a new user
exports.cUser = async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    console.warn(error);
    res.status(400).json({ message: "Error processing request" });
    next();
  }
};
// read all users
exports.rUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error processing request" });
    next();
  }
};
// read a specific user
exports.rUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User doesn't exist" });
    }
    res.json(user);
  } catch (error) {
    console.warn(error);
    res.status(400).json({ message: "Error processing request" });
    next();
  }
};
// update a specific user
exports.uUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "User doesn't exist" });
    }
    res.json(user);
    console.log({ message: "User updated successfully" });
  } catch (error) {
    console.warn(error);
    res.status(400).json({ message: "Error processing request" });
    next();
  }
};
// delete a specific user
exports.dUser = async (req, res, next) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.warn(error);
    res.status(400).json({ message: "Error processing request" });
    next();
  }
};
