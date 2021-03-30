"use strict";
const http = require("http").createServer(serverUpload),
  util = require("util"),
  formidable = require("formidable"),
  fse = require("fs-extra");
function serverUpload(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });
    const content =
      '<h1>Uploader files from Node.js</h1><form action="/upload" anctype="multipart/form-data" method="POST"><div><input type="file" name="upload" required></div><div><input type="submit" value="Upload file"></div></form>';
    res.end(content);
  }
  if (req.method === "POST" && req.url === "/upload") {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<h2>Files received</h2><a href="/">Back</a><br>' +
          util.inspect({ files: files })
      );
      res.end();
    });
    form.on("progress", function (bytesReceived, bytesExpected) {
      const percentCompleted = (bytesReceived / bytesExpected) * 100;
      console.log(`Completed: ${percentCompleted.toFixed(2)} %`);
    });
    form.on("error", function (err) {
      console.log(err);
    });
    form.on("end", function (fields, files) {
      const tempPath = this.openedFiles[0].path,
        fileName = this.openedFiles[0].name,
        newLocation = "./upload/" + fileName;

      fse.copy(tempPath, newLocation, function (err) {
        return err
          ? console.log(err)
          : console.log("File uploaded successfully");
      });
    });
    return;
  }
}
http.listen(3000);
console.log("Server running in http://localhost:3000");
