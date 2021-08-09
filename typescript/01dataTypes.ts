const aInteger: number = 10;
const aFloat: number = 3.14;
const aBinary: number = 0b1001;
const aOctal: number = 0o10;
const aHexadecimal: number = 0xff;
const sum: number = aInteger + aFloat + aBinary + aOctal + aHexadecimal;
//console.log(aInteger, aFloat, aBinary, aOctal, aHexadecimal, sum);
const aChar: string = "!";
const aString: string = "Hello, World";
const aConcat: string = ` - ${aString}${aChar}`;
//console.log(aChar, aString, aConcat);
const aBoolean: boolean = true;
//console.log(aBoolean);
let aSpecificType: string;
aSpecificType = "using variable";
//console.log(aSpecificType);
const array1: Array<string> = ["a", "b", "c"];
//console.log(array1);
const array2: number[] = [1, 2, 3];
//console.log(array2);
const objSimple = { key: "value" };
//console.log(objSimple, typeof objSimple);
let objLiteral: {
  name: string;
  age: number;
  dev: boolean;
} = {
  name: "javi",
  age: 45,
  dev: true,
};
//console.log(objLiteral, typeof objLiteral);
//console.log(objLiteral.name, objLiteral.age, objLiteral.dev);
let aTuple: [string, number, boolean];
aTuple = ["a", 1, true];
//console.log(aTuple);
enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
const ubication = CardinalDirections.South;
//console.log(ubication);
enum roles {
  guest,
  user,
  admin,
  superadmin,
}
const profile = roles.guest;
//console.log(profile);
let unknown: any;
unknown = "anything";
//console.log(unknown, typeof unknown);
unknown = 10;
//console.log(unknown, typeof unknown);
unknown = true;
//console.log(unknown, typeof unknown);
let aNull: null = null;
//console.log(aNull);
let aUndefined: undefined = undefined;
//console.log(aUndefined);
const noReturn = (): void => console.log("void example");
//noReturn();
const neverExample = (msg: string): never => {
  throw new Error(msg);
};
//console.log(neverExample("a message"));
const infinityLoop = (): never => {
  while (true) {}
};
//infinityLoop();
let literal: "nameLiteral";
// how tu use literal?
interface Person {
  name: string;
  age: number;
  dev: boolean;
}
const printPerson = (person: Person) => console.log(person);
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
//printPerson(person1);
//printPerson(person2);
type customType = [string, number, boolean];
const usingCustomType: customType = ["hi", 10, true];
//console.log(usingCustomType);
type customTypeWithOptions = string | number;
let usingCustomTypeWithOptions: customTypeWithOptions = "Hi";
//console.log(usingCustomTypeWithOptions);
usingCustomTypeWithOptions = 10;
//console.log(usingCustomTypeWithOptions);
const returnDiff = (args: string | number): boolean | number => {
  if (typeof args === "string") {
    return true;
  } else {
    return 0;
  }
};
//console.log(returnDiff("Hi"));
//console.log(returnDiff(10));
let varName: Function;
const fnClg = (str: string): void => console.log(str);
varName = fnClg;
//console.log(varName("Hi"));
const fnSum = (a: number, b: number): number => a + b;
varName = fnSum;
//console.log(varName(2, 3));
let variName: (x: number, y: number) => number;
variName = fnSum;
//console.log(variName(2, 3));
