"use strict";
//console.log("Hello, World!");

/**
 * Core
 */

/* Globals */
//console.log(window);
//console.log(global);

/* Process */
/*
const singleThread = () => {
  console.info("--------------------------------");
  console.info("\tThe NODEJS Process");
  console.info("Process ID: " + process.pid);
  console.info("Title: " + process.title);
  console.info("Node Directory: " + process.execPath);
  console.info("Current Directory: " + process.cwd);
  console.info("Node version: " + process.version);
  console.info("Dependencies version: " + process.versions);
  console.info("Platform OS: " + process.platform);
  console.info("Architecture OS: " + process.arch);
  console.info("Node Uptime: " + process.uptime);
  console.info("Process Arguments: " + process.argv);
  console.info("--------------------------------");
};
singleThread();
*/

/* HTTP */
/*
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () =>
  console.info(`Server running at http://${hostname}:${port}/`)
);
*/

/* Buffer */
/*
const buf = new Buffer(26);
for (let i = 0; i < buf.length; i++) {
  buf[i] = i + 97;
}
console.info(buf.toString("ascii"));
*/

/* Stream, File System*/
/*
const fs = require("fs"),
  readStream = fs.createReadStream("assets/names.txt"),
  writeStream = fs.createWriteStream("assets/names_copy.txt");
readStream.pipe(writeStream);
readStream.on("data", function (chunk) {
  console.info("I have read: ", chunk.length, "characters.");
});
readStream.on("end", function () {
  console.info("I finished reading the file.");
});
*/

/* Events */
/*
const { EventEmitter } = require("events");
const eventEmitter = require("events").EventEmitter,
  pub = new EventEmitter();
pub.on("myevent", function (message) {
  console.info(message);
});
pub.once("myevent", function (message) {
  console.info("Is issued the first time " + message);
});
pub.emit("myevent", "I'm an event broadcaster.");
pub.emit("myevent", "Again.");
*/

/* HTTP, PATH, URL, Query String */
/*
const http = require("http").createServer(webServer),
  path = require("path"),
  url = require("url"),
  urls = [
    {
      id: 1,
      route: "",
      output: "<h2>Home ...</h2>",
    },
    {
      id: 2,
      route: "about",
      output: "<h2>About ...</h2>",
    },
    {
      id: 3,
      route: "contact",
      output: "<h2>Contact ...</h2>",
    },
  ];
function webServer(req, res) {
  const message = "<h1>Hello, World!</h1>",
    pathURL = path.basename(req.url),
    id = url.parse(req.url, true).query.id;
  console.info(`ID: ${id}, Path: ${pathURL}`);
  urls.forEach(function (el) {
    if (el.route === pathURL || el.id == id) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(message + el.output);
    }
  });
  if (!res.finished) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Error 404: Page not found.</h1>");
  }
}
http.listen(3000);
console.info("Server running at http://localhost:3000");
*/

/* HTTP, CLIENT */
/*
const http = require("http"),
  options = {
    host: "javierandresgp.com",
  };
http
  .get(options, function (res) {
    console.log(`Host: ${options.host}, Status code: ${res.statusCode}`);
  })
  .on("error", function (err) {
    console.log(
      `Host: ${options.host}, Error code: ${err.code}, Error message: ${err.message}`
    );
  });
*/

/* FORM */
const http = require("http").createServer(webServer),
  form = require("fs").readFileSync("assets/form.html"),
  querystring = require("querystring"),
  util = require("util");
let dataString = "";
function webServer(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form);
  }
  if (req.method === "POST") {
    req.on("data", function (data) {
      dataString += data;
    });
    req.on("end", function () {
      const dataObject = querystring.parse(dataString),
        dataJSON = util.inspect(dataObject),
        templateString = `
Data as String: ${dataString}
Data as Object: ${dataObject}
Data as JSON: ${dataJSON}
      `;
      res.end(templateString);
      console.log(templateString);
    });
  }
}
http.listen(3000);
console.info("Server running at http://localhost:3000");
