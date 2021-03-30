"use strict";
const express = require("express"),
  app = express();
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/assets/index.html`);
});
app.listen(3000);
console.log("Starting Express in the port 3000");
