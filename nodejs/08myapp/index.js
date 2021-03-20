"use strict";
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/router");
const mongoose = require("mongoose");
const db = mongoose.connection;
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("we're connected!");
});

// enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors());
// enable routes
app.use("/", routes());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
