"use strict";
const express = require("express"),
  app = express();
app.get("/", (req, res) => {
  res.end("<h1>Hello, World! from Express</h1>");
});
app.listen(3000);
console.log("Starting Express in the port 3000");
