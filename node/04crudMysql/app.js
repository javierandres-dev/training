"use strict";
// Define modules and elements
const express = require("express"),
  favicon = require("serve-favicon"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  //jade = require("jade"),
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
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev"))
  .use(publicDir)
  // Execute the router middleware
  .use(routes);
// Export to use
module.exports = app;
