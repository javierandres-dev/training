"use strict";
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

module.exports = function () {
  // middleware that is specific to this router
  router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });
  // define the home page route
  router.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
  });
  // define the page route
  router.post("/users", userControllers.cUser);
  // define the page route
  router.get("/users", userControllers.rUsers);
  // define the page route
  router.get("/users/:id", userControllers.rUser);
  // define the page route
  router.put("/users/:id", userControllers.uUser);
  // define the page route
  router.delete("/users/:id", userControllers.dUser);
  // define the page route
  router.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that!");
  });
  // define the page route
  router.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  return router;
};
