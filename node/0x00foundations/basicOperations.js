//exports.property = "value";
const operations = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    //return a / b;
    if (b == 0) return "Error: Divisor is zero";
    else return a / b;
  },
};
module.exports = operations;
