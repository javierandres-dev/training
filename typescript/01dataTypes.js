var aInteger = 10;
var aFloat = 3.14;
var aBinary = 9;
var aOctal = 8;
var aHexadecimal = 0xff;
var sum = aInteger + aFloat + aBinary + aOctal + aHexadecimal;
//console.log(aInteger, aFloat, aBinary, aOctal, aHexadecimal, sum);
var aChar = "!";
var aString = "Hello, World";
var aConcat = " - " + aString + aChar;
//console.log(aChar, aString, aConcat);
var aBoolean = true;
//console.log(aBoolean);
var aSpecificType;
aSpecificType = "using variable";
//console.log(aSpecificType);
var array1 = ["a", "b", "c"];
//console.log(array1);
var array2 = [1, 2, 3];
//console.log(array2);
var objSimple = { key: "value" };
//console.log(objSimple, typeof objSimple);
var objLiteral = {
    name: "javi",
    age: 45,
    dev: true
};
//console.log(objLiteral, typeof objLiteral);
//console.log(objLiteral.name, objLiteral.age, objLiteral.dev);
var aTuple;
aTuple = ["a", 1, true];
//console.log(aTuple);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var ubication = CardinalDirections.South;
//console.log(ubication);
var roles;
(function (roles) {
    roles[roles["guest"] = 0] = "guest";
    roles[roles["user"] = 1] = "user";
    roles[roles["admin"] = 2] = "admin";
    roles[roles["superadmin"] = 3] = "superadmin";
})(roles || (roles = {}));
var profile = roles.guest;
//console.log(profile);
var unknown;
unknown = "anything";
//console.log(unknown, typeof unknown);
unknown = 10;
//console.log(unknown, typeof unknown);
unknown = true;
//console.log(unknown, typeof unknown);
var aNull = null;
//console.log(aNull);
var aUndefined = undefined;
//console.log(aUndefined);
var noReturn = function () { return console.log("void example"); };
//noReturn();
var neverExample = function (msg) {
    throw new Error(msg);
};
//console.log(neverExample("a message"));
var infinityLoop = function () {
    while (true) { }
};
//infinityLoop();
var literal;
var printPerson = function (person) { return console.log(person); };
var person1 = {
    name: "javi",
    age: 45,
    dev: true
};
var person2 = {
    name: "andy",
    age: 25,
    dev: false
};
var usingCustomType = ["hi", 10, true];
var usingCustomTypeWithOptions = "Hi";
//console.log(usingCustomTypeWithOptions);
usingCustomTypeWithOptions = 10;
//console.log(usingCustomTypeWithOptions);
var returnDiff = function (args) {
    if (typeof args === "string") {
        return true;
    }
    else {
        return 0;
    }
};
//console.log(returnDiff("Hi"));
//console.log(returnDiff(10));
var varName;
var fnClg = function (str) { return console.log(str); };
varName = fnClg;
//console.log(varName("Hi"));
var fnSum = function (a, b) { return a + b; };
varName = fnSum;
//console.log(varName(2, 3));
var variName;
variName = fnSum;
//console.log(variName(2, 3));
