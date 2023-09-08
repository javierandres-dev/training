const UserModel = require("../models/users.model");

const usersCrontoller = {
  createUser: (req, res) => {
    res.send("create");
  },
  readUsers: async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
  },
  readUser: (req, res) => {
    res.send("read");
  },
  updateUser: (req, res) => {
    res.send("update");
  },
  deleteUser: (req, res) => {
    res.send("delete");
  },
};

module.exports = usersCrontoller;
