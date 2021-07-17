"use strict";
const express = require("express"),
  app = express();
app.get("/", (req, res) => {
  //res.end(`<h1>Hello, World!; from 03-Express</h1>`);
  res.send(`<h1>Hello, World!; from 03-Express</h1>`);
});
app.get("/javi", (req, res) => {
  res.redirect(301, "https://www.javierandresgp.com");
});
app.get("/json", (req, res) => {
  res.json({
    name: "Javi",
    website: "https://www.javierandresgp.com",
  });
});
app.listen(3000);
console.log("Starting Express in the port 3000");
