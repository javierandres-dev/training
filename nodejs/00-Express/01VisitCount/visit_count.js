"use stric";
const express = require("express"),
  app = express(),
  cookieParser = require("cookie-parser"),
  cookieSession = require("cookie-session");
app.use(cookieParser());
app.use(cookieSession({ secret: "secreto" }));
app.get("/", (req, res) => {
  req.session.visits || (req.session.visits = 0);
  let v = req.session.visits++;
  res.send(`<h1>Hello, World!; from Express-Visit count<br>Visits: ${v}</h1>`);
});
app.listen(3000);
console.log("Server running in localhost, port 3000");
