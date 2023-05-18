'use strict';
const arr = [1, 2, 3];
//console.log(arr);
//console.log(typeof arr);
//console.log(arr instanceof Object);
//console.log(arr instanceof Array);
//console.log(arr instanceof String);

/* Destructuring */
const profiles = ['admin', 'secretary', 'seller', 'customer'];
const [one, two] = profiles;
//console.log(one, two);

const profilesObj = {
  pOne: { role: 'admin' },
  pTwo: { role: 'secretary' },
  pThree: { role: 'seller' },
  pFour: { role: 'customer' },
};
const { pOne, pThree } = profilesObj;
//console.log(pOne, pThree);

/* Rest parameters */
function showLog(...paramsList) {
  console.log(...paramsList);
}
//showLog(1, 2, 3);
//showLog(1, 2, 3, 4);

function fnMany(a, b, ...many) {
  console.log(a);
  console.log(b);
  console.log(many);
}
//fnMany(1);
//fnMany(1, 2);
//fnMany(1, 2, 3);
//fnMany(1, 2, 3, 4);

function sum(...paramsList) {
  let total = 0;
  for (const param of paramsList) {
    total += param;
  }
  console.log(total);
}
//sum(1, 2, 3);
//sum(1, 2, 3, 4);

function multiply(multiplier, ...numbers) {
  console.log(numbers.map((number) => number * multiplier));
}
//multiply(5, 1, 2, 3, 4, 5);

const person = {
  firstname: 'pepita',
  lastname: 'pérez',
  role: 'admin',
  married: false,
};
const { married, ...newPerson } = person;
console.log(newPerson);

/* Spread */
const copyPerson = person;
const copiedPerson = { ...person };
console.log(person);
person.email = 'e@e.com';
console.log(person);
console.log(copyPerson);
console.log(copiedPerson);

const objA = {
  a: 'a',
  b: 'b',
};
const objB = {
  c: 'c',
  d: 'd',
};
const objC = { objA, objB };
console.log(objC);
const objD = { ...objA, ...objB };
console.log(objD);

const arrA = ['a', 'b'];
const arrB = ['c', 'd'];
const arrC = [arrA, arrB];
console.log(arrC);
const arrD = [...arrA, ...arrB];
console.log(arrD);

const arrNums = [1, 2, 3, 4];
//console.log(arrNums);
const objNums = { ...arrNums };
//console.log(objNums);

function sumNums(n1, n2, n3, n4) {
  console.log(n1 + n2 + n3 + n4);
}
//sumNums(arrNums);

const str = 'hello';
console.log(str);
console.log(typeof str);
console.log(...str);
console.log([...str]);
console.log({ ...str });
