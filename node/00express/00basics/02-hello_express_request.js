"use strict";
const express = require("express"),
  app = express();
app.get("/", (req, res) => {
  res.end("<h1>Hello, World!; from 02-Express</h1>");
});
app.get("/user/:name", (req, res) => {
  res.end(`<h2>Hello, ${req.params.name}!</h2>`);
});
app.get("/search", (req, res) => {
  res.end(`<h2>The results for <mark>${req.query.s}</mark></h2>`);
});
app.listen(3000);
console.log("Starting Express in the port 3000");
