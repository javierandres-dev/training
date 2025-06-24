"use strict";
// String constructor
console.log(String); // [Function: String]
// String prototype
console.log(String.prototype); // String {}
// String static properties
console.log(String.length); // 1
console.log(String.prototype.length); // 0

// String object
const strConstructor = new String("abc");
console.log(strConstructor); // String { 'abc' }
// String function
const strFunction = String("abc");
console.log(strFunction); // 'abc'
// String literal
const strLiteral = "abc";
console.log(strLiteral); // 'abc'

let result = strConstructor instanceof String;
console.log(result); // true
result = typeof strConstructor;
console.log(result); // object
result = strFunction instanceof String;
console.log(result); // false
result = typeof strFunction;
console.log(result); // string
result = strLiteral instanceof String;
console.log(result); // false
result = typeof strLiteral;
console.log(result); // string

// Static methods
result = String.fromCharCode(97, 98, 99); // 'abc' (ASCII codes 97, 98, 99)
console.log(result); // 'abc'
result = String.fromCodePoint(97, 98, 99); // 'abc' (Unicode code points 97, 98, 99)
console.log(result);
result = String.raw`abc\nxyz`; // 'abc\nxyz' (raw string with escape sequences)
console.log(result);
// Static properties
// length property
console.log(String.length); // 1 (number of parameters the String constructor takes)
// name property
console.log(String.name); // 'String' (name of the String constructor)
// prototype property
console.log(String.prototype); // String {} (prototype of String constructor)

// String properties and methods
let str = "aeiou";
// String instance properties
// length property
console.log(str.length); // 5
// String instance methods
// at method
console.log(str.at(0)); // 'a'
console.log(str.at(-1)); // 'u' (last character)
// charAt method
console.log(str.charAt(0)); // 'a'
// charCodeAt method
console.log(str.charCodeAt(0)); // 97 (ASCII code for 'a')
// codePointAt method
console.log(str.codePointAt(0)); // 97 (Unicode code point for 'a')
// concat method
console.log(str.concat("xyz")); // 'aeiouxyz' (concatenates 'xyz' to 'aeiou')
// endsWith method
console.log(str.endsWith("iou")); // true (checks if 'aeiou' ends with 'iou')
console.log(str.endsWith("xyz")); // false (checks if 'aeiou' ends with 'xyz')
// includes method
console.log(str.includes("aei")); // true (checks if 'aeiou' includes 'aei')
console.log(str.includes("xyz")); // false (checks if 'aeiou' includes 'xyz')
// indexOf method
console.log(str.indexOf("e")); // 1 (index of 'e' in 'aeiou')
console.log(str.indexOf("x")); // -1 (not found)
// isWellFormed method
console.log(str.isWellFormed()); // true (checks if string is well-formed, not a standard method)
// lastIndexOf method
console.log(str.lastIndexOf("i")); // 3 (last index of 'i' in 'aeiou')
console.log(str.lastIndexOf("x")); // -1 (not found)
// localeCompare method
console.log(str.localeCompare("aeiou")); // 0 (same string)
console.log(str.localeCompare("xyz")); // -1 (different strings)
// match method
console.log(str.match(/ae/)); // [ 'ae', index: 0, input: 'aeiou', groups: undefined ]
console.log(str.match(/xyz/)); // null (no match)
// matchAll method
console.log(str.matchAll(/a/g)); // [ [ 'a', index: 0, input: 'aeiou', groups: undefined ] ]
console.log(str.matchAll(/xyz/g)); // []
// normalize method
console.log(str.normalize()); // 'aeiou' (normalizes string, not a standard method)
// padEnd method
console.log(str.padEnd(10, "x")); // 'aeiouxxxxx' (pads 'aeiou' to length 10 with 'x')
// padStart method
console.log(str.padStart(10, "x")); // 'xxxxxaeiou' (pads 'aeiou' to length 10 with 'x')
// repeat method
console.log(str.repeat(2)); // 'aeiouaeiou' (repeats 'aeiou' twice)
// replace method
console.log(str.replace("ae", "xy")); // 'xyiou' (replaces 'ae' with 'xy')
console.log(str.replace(/ae/g, "xy")); // 'xyiou' (replaces all occurrences of 'ae' with 'xy')
// replaceAll method
console.log(str.replaceAll("ae", "xy")); // 'xyiou' (replaces all occurrences of 'ae' with 'xy')
// search method
console.log(str.search("ei")); // 1 (index of 'ei' in 'aeiou')
console.log(str.search("xyz")); // -1 (not found)
// slice method
console.log(str.slice(1, 3)); // 'ei' (slices 'aeiou' from index 1 to 3)
// split method
console.log(str.split("i")); // [ 'aeo', 'u' ] (splits 'aeiou' by 'i')
// startsWith method
console.log(str.startsWith("ae")); // true (checks if 'aeiou' starts with 'ae')
console.log(str.startsWith("xyz")); // false (checks if 'aeiou' starts with 'xyz')
// substring method
console.log(str.substring(1, 3)); // 'ei' (substring from index 1 to 3)
// toLocaleLowerCase method
console.log(str.toLocaleLowerCase()); // 'aeiou' (converts to lowercase, not a standard method)
// toLocaleUpperCase method
console.log(str.toLocaleUpperCase()); // 'AEIOU' (converts to uppercase, not a standard method)
// toLowerCase method
console.log(str.toLowerCase()); // 'aeiou' (converts to lowercase)
// toString method
console.log(str.toString()); // 'aeiou' (converts to string)
// toUpperCase method
console.log(str.toUpperCase()); // 'AEIOU' (converts to uppercase)
// toWellFormed method
console.log(str.toWellFormed()); // 'aeiou' (converts to well-formed string, not a standard method)
// trim method
console.log(str.trim()); // 'aeiou' (trims whitespace, not a standard method)
// trimEnd method
console.log(str.trimEnd()); // 'aeiou' (trims whitespace from end, not a standard method)
// trimStart method
console.log(str.trimStart()); // 'aeiou' (trims whitespace from start, not a standard method)
// valueOf method
console.log(str.valueOf()); // 'aeiou' (returns primitive value of string)

// Inheritance Object/Function
console.log(str.__proto__ === String.prototype); // true (str is an instance of String)
// str is an instance of String
console.log(str instanceof String); // false (str is a primitive string, not an object)
// str is not an instance of String object
console.log(str instanceof Object); // false (str is a primitive string, not an object)
// str is not an instance of Function
console.log(str instanceof Function); // false (str is a primitive string, not a function)

// apply method
result = String.prototype.apply(str, ["xyz"]); // 'xyz' (applies 'xyz' to str)
console.log(result); // 'xyz'
// bind method
result = String.prototype.bind(str, "xyz"); // binds 'xyz' to str
console.log(result); // [Function: bound String]
// call method
result = String.prototype.call(str, "xyz"); // 'xyz' (calls str with 'xyz')
console.log(result); // 'xyz'
// toString method
result = String.prototype.toString.call(str); // 'aeiou' (converts str to string)
console.log(result); // 'aeiou'
