"use strict";
// callback example
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(name);
}

greet("Jane", (name) => {
  console.log(`Bye ${name}.`);
});
