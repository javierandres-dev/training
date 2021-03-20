const aSymbol = Symbol();
const oSymbol = Symbol();
aSymbol === oSymbol ? console.log("equals") : console.log("differents");
console.log(Symbol() === Symbol());
console.log(aSymbol);
console.log(oSymbol);
// it no accept "loops"
