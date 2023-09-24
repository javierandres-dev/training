const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const { getToken, getTen } = require("../helpers/getFunctions");

console.log(getTen());

const loginController = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userFound = await UserModel.findOne({ email });
      if (userFound) {
        const isValidPassword = await bcrypt.compare(
          password,
          userFound.password
        );
        if (!isValidPassword) {
          res.status(400).json({ message: "Invalid credentials." });
        } else {
          /* jwt.sign(
            { id: userFound._id, name: userFound.name },
            "topSecret321",
            { expiresIn: "1d" },
            (err, token) => {
              if (err) {
                res.json({ err });
              } else {
                res.json({ token });
              }
            }
          ); */
          const token = await getToken({
            id: userFound._id,
            name: userFound.name,
          });
          res.json(token);
        }
      } else {
        res.status(400).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = loginController;
