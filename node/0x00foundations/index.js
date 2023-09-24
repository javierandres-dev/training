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

const fs = require("fs");

fs.writeFile("./file.txt", "first line", (err) => {
  if (err) console.log("error:", err);
  else console.log("success");
});
console.log("end line of script");
