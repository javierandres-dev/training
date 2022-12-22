'use strict';
const arr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
const arrObj = new Array('item1', 'item2', 'item3', 'item4', 'item5', 'item6');
const emptyArr = [];
const emptyArrObj = new Array();
const arrOneEl = [10];
const arrObjOneEl = new Array(10);
const women = ['pepita', 'sophia', 'isabella'];
const men = ['pepito', 'jon', 'lucas'];
const elements = ['el1', 'el2', 'el3', 'el4', 'el5', 'el6', 'el7', 'el8'];
const over18 = [19, 20, 21, 22];
const under18 = [14, 15, 16, 17];
const allNumbers = [14, 15, 16, 17, 18, 19, 20, 21, 22];
const any = ['', NaN, [], {}, 'one', 'two', 'one', 'three', 'one', 'four'];
const persons = [
  { firstname: 'pepita', lastname: 'pérez' },
  { firstname: 'sophia', lastname: 'smith' },
  { firstname: 'isabella', lastname: 'williams' },
  { firstname: 'jon', lastname: 'doe' },
];
const even = [2, 4, 6, 8];
const odd = [1, 3, 5, 7, 9];
const on = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const no = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const ad = ['a', 'b', 'c', 'd'];
const da = ['d', 'c', 'b', 'a'];

let result = null;

const str = 'Hello, World!';

function isOver18(num) {
  return num > 18;
}

function double(num) {
  return num * 2;
}

// console.log(arr);
// console.log(arrObj);
// console.log(emptyArrObj);
// console.log(emptyArr);

// console.log(typeof arr);
// console.log(arr instanceof Array);
// console.log(typeof arrObj);
// console.log(arrObj instanceof Array);

// console.log(arr.length);
// console.log(emptyArr.length);

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// console.log(arrOneEl);
// console.log(arrObjOneEl);
// console.log(arrOneEl.length);
// console.log(arrObjOneEl.length);

// console.log(women.concat(men));
// console.log(women.concat(men, arr));

// console.log(elements.copyWithin(2));
// console.log(elements.copyWithin(2, 0));
// console.log(elements.copyWithin(2, 4));
// console.log(elements.copyWithin(2, 4, 6));

// console.log(arr.entries());
// result = arr.entries();
// console.log(typeof result);
// console.log(result instanceof Object);
// for (const i of result) {
//   console.log(i);
//   console.log(i instanceof Array);
// }

// console.log(over18.every(isOver18));
// console.log(under18.every(isOver18));
// console.log(allNumbers.every(isOver18));

// console.log(arr.fill('any'));
// console.log(arr);

// console.log(allNumbers.filter(isOver18));
// console.log(allNumbers.filter((i) => i >= 18));
// console.log(allNumbers.filter((i) => i <= 18));

// console.log(allNumbers.find(isOver18));
// console.log(allNumbers.find((i) => i === 18));
// console.log(allNumbers.find((i) => i === 180));

// console.log(allNumbers);
// console.log(allNumbers.findIndex(isOver18));
// console.log(allNumbers.findIndex((i) => i === 18));
// console.log(allNumbers.findIndex((i) => i === 180));

// console.log(allNumbers.forEach(isOver18));
// console.log(allNumbers.forEach((i) => console.log(i)));
// result = 0;
// console.log('result:', result);
// allNumbers.forEach((i) => (result += i));
// console.log('result:', result);
// console.log(allNumbers);
// result = '';
// allNumbers.forEach((i) => (result += double(i) + ' '));
// console.log(result);

// console.log(Array.from('str'));
// console.log(Array.from(str));

// console.log(allNumbers.includes(18));
// console.log(allNumbers.includes(18, 5));
// console.log(allNumbers.includes(180));

// console.log(allNumbers.indexOf(18));
// console.log(allNumbers.indexOf(18, 5));
// console.log(allNumbers.indexOf(180));

// console.log(Array.isArray(arr));
// console.log(Array.isArray(str));

// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(' '));

// console.log(arr.keys());
// result = arr.keys();
// for (const i of result) {
//   console.log(i);
// }
// console.log(result);

// console.log(any);
// console.log(any.lastIndexOf('one'));
// console.log(any.lastIndexOf('hi'));

// console.log(allNumbers);
// console.log(allNumbers.map(isOver18));
// console.log(allNumbers.map((i) => i === 18));
// console.log(persons.map((i) => [i.firstname, i.lastname].join(' ')));

// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// console.log(arr);
// console.log(arr.push('item7'));
// console.log(arr);
// console.log(arr.push('item8', 'item9'));
// console.log(arr);

// console.log(even);
// console.log(even.reduce((total, current) => total - current));
// console.log(even.reduce((total, current) => total - current, 10));
// console.log(even.reduce((total, current) => total + current));
// console.log(even.reduce((total, current) => total + current, 10));

// console.log(even);
// console.log(even.reduceRight((total, current) => total - current));
// console.log(even.reduceRight((total, current) => total - current, 10));
// console.log(even.reduceRight((total, current) => total + current));
// console.log(even.reduceRight((total, current) => total + current, 10));

// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// console.log(arr);
// console.log(arr.slice(1, 3));
// console.log(arr.slice(3, -1));
// console.log(arr.slice(-3, -1));

// console.log(allNumbers);
// console.log(allNumbers.some(isOver18));
// console.log(under18.some(isOver18));

// console.log(da);
// console.log(da.sort());
// console.log(no);
// console.log(no.sort());

// console.log(arr);
// console.log(arr.splice(0, 1));
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(2, 2));
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(2, 2, 'newItem1', 'newItem2'));
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(2, 1, 'newItem1', 'newItem2'));
// console.log(arr);

// console.log(arr);
// console.log(arr.toString());

// console.log(arr);
// console.log(arr.unshift('newItem'));
// console.log(arr);

// console.log(emptyArr);
// console.log(emptyArr.unshift('newItem'));
// console.log(emptyArr);

// console.log(arr);
// console.log(arr.valueOf());
