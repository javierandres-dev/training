const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const usersRouter = require("./routers/users.router");
const loginRouter = require("./routers/loginRouter");
const tasksRouter = require("./routers/tasks.router");
const uploadRouter = require("./routers/uploadsRouter");

const server = express();
const port = process.env.PORT;

server.set("port", port);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use("/users/", usersRouter);
server.use("/login/", loginRouter);
server.use("/tasks/", tasksRouter);
server.use("/uploads/", uploadRouter);

server.get("/", (req, res) => {
  //console.log("root works!");
  //res.download("filename")
  //res.sendStatus(500)
  //res.sendStatus(200).send("root works!")
  //res.status(200).json({ message: "root works!" });
  res.json({ message: "root works!" });
});
module.exports = server;
