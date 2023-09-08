const express = require("express");
const morgan = require("morgan");
const server = express();
server.set("port", process.env.PORT || 8000);
server.use(morgan("dev"));
server.use("users/", require("./routers/users.router"));
module.exports = server;
