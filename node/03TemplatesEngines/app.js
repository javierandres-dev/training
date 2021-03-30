"use strict";
// Elements define
const express = require("express"),
  //path = require("path"),
  favicon = require("serve-favicon"),
  morgan = require("morgan"),
  jade = require("jade"),
  routes = require("./routes/index"),
  faviconUrl = `${__dirname}/public/img/favicon.ico`,
  publicDir = express.static(`${__dirname}/public`),
  viewDir = `${__dirname}/views`,
  port = process.env.PORT || 3000,
  app = express();
app
  // Set up app
  .set("views", viewDir)
  .set("view engine", "jade")
  .set("port", port)
  // Execute middlewares
  .use(favicon(faviconUrl))
  .use(morgan("dev"))
  .use(publicDir)
  // Execute the router middleware
  .use("/", routes);
// Export to use
module.exports = app;
