"use stric";
const app = require("./app.js"),
  server = app.listen(app.get("port"), () => {
    console.log(`Starting Express in the port ${app.get("port")}`);
  });
