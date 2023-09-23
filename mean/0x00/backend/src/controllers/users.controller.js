const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const usersCrontroller = {
  createUser: async (req, res) => {
    //res.send("create...");
    //console.log(req.body);
    //const newUser = new UserModel(req.body);
    //console.log(newUser);
    //const created = await newUser.save();
    //console.log(created);
    //res.json({ created: created._id });
    try {
      /* const newUser = new UserModel(req.body);
      const created = await newUser.save();
      res.json({ created: created._id }); */
      const { name, email, password } = req.body;
      //console.log(name, email, password);
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        name,
        email,
        password: hashPassword,
      });
      const created = await newUser.save();
      //res.json({ created: created._id });
      //res.json({ created: true, id: created._id, name: created.name });
      /* jwt.sign(
        { id: created._id, name: created.name },
        "topSecret321",
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            res.json({ err });
          } else {
            res.cookie("token", token);
            res.json({ message: "User created successfully", token });
          }
        }
      ); */
    } catch (error) {
      res.json({ error });
    }
  },

  readUsers: async (req, res) => {
    //res.send("read all...");
    //const allUsers = await UserModel.find();
    //console.log(allUsers);
    //res.json({ allUsers });
    try {
      const allUsers = await UserModel.find();
      res.json({ allUsers });
    } catch (error) {
      res.json({ error });
    }
  },

  readUser: async (req, res) => {
    //res.send("read...");
    //console.log(req.params);
    //const user = await UserModel.findById(req.params.id);
    //console.log(user);
    //res.json({ user });
    try {
      const user = await UserModel.findById(req.params.id);
      if (user) res.json({ user });
      else throw new Error("user not found");
    } catch (error) {
      //console.log(error);
      res.json({ error: error.message || error });
    }
  },

  updateUser: async (req, res) => {
    //res.send("update...");
    //console.log(req.params);
    //console.log(req.body);
    //const updated = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    //console.log(updated);
    //res.json({ updated: updated._id });
    try {
      const updated = await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (updated) res.json({ updated: updated._id });
      else throw new Error("user not found");
    } catch (error) {
      res.json({ error: error.message || error });
    }
  },

  deleteUser: async (req, res) => {
    //res.send("delete...");
    //console.log(req.params);
    //const deleted = await UserModel.findByIdAndDelete(req.params.id);
    //console.log(deleted);
    //res.json({ detail: deleted._id });
    try {
      const deleted = await UserModel.findByIdAndDelete(req.params.id);
      if (deleted) res.json({ deleted: deleted._id });
      else throw new Error("user not found");
    } catch (error) {
      res.json({ error: error.message || error });
    }
  },
};

module.exports = usersCrontroller;
