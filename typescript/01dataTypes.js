"use strict";
const aInteger = 10;
const aFloat = 3.14;
const aBinary = 0b1001;
const aOctal = 0o10;
const aHexadecimal = 0xff;
const sum = aInteger + aFloat + aBinary + aOctal + aHexadecimal;
const aChar = "!";
const aString = "Hello, World";
const aConcat = ` - ${aString}${aChar}`;
const aBoolean = true;
let aSpecificType;
aSpecificType = "using variable";
const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const objSimple = { key: "value" };
let objLiteral = {
    name: "javi",
    age: 45,
    dev: true,
};
let aTuple;
aTuple = ["a", 1, true];
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
const ubication = CardinalDirections.South;
var roles;
(function (roles) {
    roles[roles["guest"] = 0] = "guest";
    roles[roles["user"] = 1] = "user";
    roles[roles["admin"] = 2] = "admin";
    roles[roles["superadmin"] = 3] = "superadmin";
})(roles || (roles = {}));
const profile = roles.guest;
let unknown;
unknown = "anything";
unknown = 10;
unknown = true;
let aNull = null;
let aUndefined = undefined;
const noReturn = () => console.log("void example");
const neverExample = (msg) => {
    throw new Error(msg);
};
const infinityLoop = () => {
    while (true) { }
};
let literal;
const printPerson = (person) => console.log(person);
const person1 = {
    name: "javi",
    age: 45,
    dev: true,
};
const person2 = {
    name: "andy",
    age: 25,
    dev: false,
};
const usingCustomType = ["hi", 10, true];
let usingCustomTypeWithOptions = "Hi";
usingCustomTypeWithOptions = 10;
const returnDiff = (args) => {
    if (typeof args === "string") {
        return true;
    }
    else {
        return 0;
    }
};
let varName;
const fnClg = (str) => console.log(str);
varName = fnClg;
const fnSum = (a, b) => a + b;
varName = fnSum;
let variName;
variName = fnSum;
