let aNumber: number = 10;
//console.log(aNumber);
let oNumber = 10;
//console.log(oNumber);
let aString: string = "Hello, World!";
//console.log(aString);
let oString: string = "Hello, World!";
//console.log(oString);
let aBoolean: boolean = true;
//console.log(aBoolean);
let oBoolean: boolean = true;
//console.log(oBoolean);
let aAny: any = "Hi";
//console.log(aAny);
aAny = 0;
//console.log(aAny);
aAny = true;
//console.log(aAny);
let oAny;
oAny = "Hi";
//console.log(oAny);
oAny = 0;
//console.log(oAny);
oAny = true;
//console.log(oAny);
let aSpecificType: String;
aSpecificType = "Hi";
//console.log(aSpecificType);
let aNull: null = null;
//console.log(aNull);
let aUndefined: undefined = undefined;
//console.log(aUndefined);
let oOany = undefined;
//console.log(oOany);
oOany = 3;
//console.log(oOany);
oOany = "Hi";
//console.log(oOany);
let aObj: object = {};
//console.log(aObj);
aObj = { key: "value" };
//console.log(aObj);
let oObj = { key: "value" };
//console.log(oObj);
let obj = {
  name: "javi",
  age: 45,
  dev: true,
};
//console.log(obj);
//console.log(obj.name, obj.age, obj.dev);
let obj0: object = {
  name: "javi",
  age: 45,
  dev: true,
};
//console.log(obj0);
let obj1: {
  name: string;
  age: number;
  dev: boolean;
} = {
  name: "javi",
  age: 45,
  dev: true,
};
console.log(obj1);
console.log(obj1.name, obj1.age, obj1.dev);
