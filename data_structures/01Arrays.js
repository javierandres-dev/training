"use strict";
const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let weekdays = WEEKDAYS.slice();
let numbers = NUMBERS.slice();
//console.log(weekdays, numbers);
const first = weekdays[0];
//console.log(first);
const last = weekdays[weekdays.length - 1];
//console.log(last);
weekdays.forEach((item, index, weekdays) => {
  //console.log(item);
  //console.log(index);
});
const addEnd = weekdays.push("end");
//console.log(addEnd, weekdays);
const rmEnd = weekdays.pop();
//console.log(rmEnd, weekdays);
const addFirst = weekdays.unshift("start");
//console.log(addFirst, weekdays);
const rmFirst = weekdays.shift();
//console.log(rmFirst, weekdays);
const findIdx = weekdays.indexOf("wednesday");
//console.log(findIdx, weekdays);
const rmItemByIdx = weekdays.splice(3, 1);
//console.log(rmItemByIdx, weekdays);
weekdays = WEEKDAYS.slice();
const rmItemsFromIdx = weekdays.splice(2, 3);
//console.log(rmItemsFromIdx, weekdays);
weekdays = WEEKDAYS.slice();
const copyArr = weekdays.slice();
//console.log(copyArr, weekdays);
const activePositions = Object.keys(weekdays);
//console.log(activePositions, weekdays);
const newArrFrom = Array.from(weekdays);
//console.log(newArrFrom, weekdays);
const newArrFromWithFunc = Array.from(numbers, (x) => x + x);
//console.log(newArrFromWithFunc, numbers);
const isAnArray = Array.isArray(numbers);
//console.log(isAnArray, numbers);
const arraySingle = Array.of(8);
//console.log(arraySingle);
const arrayNsize = Array(8);
//console.log(arrayNsize);
const size = weekdays.length;
//console.log(size, weekdays);
//const getValByIdx = weekdays.at(3); // don't work in nodejs
//console.log(getValByIdx, weekdays);
const mergeArrays = weekdays.concat(numbers);
//console.log(mergeArrays, weekdays, numbers);
const memmove = numbers.copyWithin(0, 3);
//console.log(memmove, numbers);
numbers = NUMBERS.slice();
console.log(numbers);
