// Primitive or Simple
let myString = "1";
let myNumber = 1;
let myBoolean = true;
/* myString = 1;
myNumber = "1";
myBoolean = "false"; */
/* console.log(myString);
console.log(myNumber);
console.log(myBoolean); */

// Union types
let id: string | number;
id = "1";
id = 1;
//console.log(id);

// Specials
let myNull = null;
let myUndefined = undefined;
myNull = "hey";
myUndefined = "hey";
/* console.log(myNull);
console.log(myUndefined); */

let myAny: any;
myAny = "1";
myAny = 1;
myAny = true;
//console.log(myAny);

let myUnknown: unknown;
myUnknown = "1";
myUnknown = 1;
myUnknown = true;
//console.log(myUnknown);

let myNever: never;
/* myNever = "1";
myNever = 1;
myNever = true;
console.log(myNever); */

// Explicit
let myExplicitString: string = "1";
let myExplicitNumber: number = 1;
let myExplicitBoolean: boolean = true;
let myExplicitNull: null;
let myExplicitUndefined: undefined;
myExplicitNull = null;
myExplicitUndefined = undefined;
/* console.log(myExplicitString);
console.log(myExplicitNumber);
console.log(myExplicitBoolean);
console.log(myExplicitNull);
console.log(myExplicitUndefined); */

// Arrays
const myArray1a: Array<number> = [1, 2];
const myArray1b: number[] = [1, 2];
const myArray2a: Array<string> = ["1", "2"];
const myArray2b: string[] = ["1", "2"];
const myArray3a: Array<boolean> = [true, false];
const myArray3b: boolean[] = [true, false];
const myArray4a: Array<null> = [null, null];
const myArray4b: null[] = [null, null];
const myArray5a: Array<undefined> = [undefined, undefined];
const myArray5b: undefined[] = [undefined, undefined];
const myArray6a: Array<any> = ["1", 1, true, null, undefined];
const myArray6b: any[] = ["1", 1, true, null, undefined];
const myArray6c = ["1", 1, true]; // Inference
//const myArray6d = []; // Inference
/* console.log(myArray1a);
console.log(myArray1b);
console.log(myArray2a);
console.log(myArray2b);
console.log(myArray3a);
console.log(myArray3b);
console.log(myArray4a);
console.log(myArray4b);
console.log(myArray5a);
console.log(myArray5b);
console.log(myArray6a);
console.log(myArray6b);
console.log(myArray6c); */
//console.log(myArray6d);

// Objects
let obj1: object;
obj1 = {};
obj1 = {
  name: "john",
  children: 2,
  enable: true,
};
//obj1.married = true;
//console.log(obj1);
const obj2: {
  name: string;
  children: number;
  enable: boolean;
  married?: boolean;
} = {
  name: "john",
  children: 2,
  enable: true,
};
obj2.married = true;
//console.log(obj2);
const obj3: { [prop: string]: number } = {};
//obj3.married = true;
obj3.children = 2;
//console.log(obj3);

// Functions
let returned: any;
/* const logA = (a) => {
  console.log(a);
};
returned = logA("a"); */
const logB = (b: any): void => {
  //console.log(b);
};
returned = logB("b");
function getDouble(x: number): number {
  return x * 2;
}
const getTriple = (x: number): number => x * 3;
returned = getDouble(1);
returned = getTriple(1);
//console.log("returned:", returned);

// Tuples
let myTuple: [string, number, boolean] = ["1", 1, true];
myTuple = ["2", 2, false];
//myTuple = [true, "1", 1];
//console.log(myTuple);

// Aliases
type EmployedName = string;
const employedName: EmployedName = "Anne";
const employedNames: EmployedName[] = ["anne", "john"];
/* console.log(employedNames);
console.log(employedName); */
type EmployedChildren = number;
type EmployedStatus = boolean;
type Employed = {
  name: EmployedName;
  children: EmployedChildren;
  status: EmployedStatus;
};
const myEmployed: Employed = {
  name: "john",
  children: 2,
  status: true,
};
//console.log(myEmployed);

// Interfaces
interface User {
  id: number;
  username: string;
  password: string;
}
//console.log(User);
const myUser1: User = {
  id: 1,
  username: "john",
  password: "asd123",
};
//console.log(myUser1);
interface Student extends User {
  grade: number;
}
const myUser2: Student = {
  id: 2,
  username: "Anne",
  password: "qwe456",
  grade: 10,
};
//console.log(myUser2);

// Casting
let myVariable: unknown = "works";
console.log(myVariable);
//console.log(myVariable.length);
/* console.log((myVariable as string).length);
console.log((<string>myVariable).length); */
