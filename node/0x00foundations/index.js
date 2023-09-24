/* const property = require("./basicOperations");
console.log(property); */

/* const operations = require("./basicOperations");
//console.log(operations);
console.log(operations.add(8, 4));
console.log(operations.substract(8, 4));
console.log(operations.multiply(8, 4));
console.log(operations.divide(8, 4));
console.log(operations.divide(8, 0));
console.log(operations.divide(0, 8)); */

// Core modules, Built-in modules
/* const os = require("os");
console.log(os);
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem()); */

/* const fs = require("fs");

fs.writeFile("./file.txt", "first line", (err) => {
  if (err) console.log("error:", err);
  else console.log("success");
});
console.log("end line of script");

fs.readFile("./file.txt", (err, data) => {
  if (err) {
    console.log("error:", err);
  } else {
    console.log("data:", data);
    console.log("data:", data.toString());
  }
}); */

const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML</title>
</head>
<body>
  <p>Response from web server with node</p>
</body>
</html>`);
    response.end();
  })
  .listen(4000, () => {
    console.log("Running server on port: 4000");
  });
