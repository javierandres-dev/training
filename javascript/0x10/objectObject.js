'use strict';
const literalObj = { key1: 'value1', key2: 'value2' };
const constructorObj = new Object({ key1: 'value1', key2: 'value2' });
const emptyObj = {};
const emptyObjCons = new Object();

const person = {
  firstname: 'pepita',
  lastname: 'pérez',
  getWorks: () => 'works!',
  // getFullname: () => `${firstname} ${lastname}`,
  // getFullname: () => `${this.firstname} ${this.lastname}`,
  /* getFullname: function () {
    return `${firstname} ${lastname}`;
  }, */
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

const otherPerson = person;

const objA = { prop1: 1, prop2: 2, prop3: 3, prop4: 4 };
const objB = { prop1: 1, prop2: 2, prop3: 3, prop4: 4 };

const arr = ['el1', 'el2', 'el3', 'el4'];

const source = { a: 1, b: 2, c: 3, d: 4 };
const target = { aa: 11, bb: 22, c: 9, dd: 44 };

const str = 'Hello, World!';

const arrArr = [
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
];

// console.log(literalObj);
// console.log(constructorObj);
// console.log(literalObj.key1);
// console.log(literalObj['key1']);
// console.log(emptyObj);
// console.log(emptyObjCons);

// console.log(person);
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.getWorks);
// console.log(person.getWorks());
// console.log(person.getFullname());
// person.genre = 'female';
// console.log(person);

// console.log(person);
// console.log(otherPerson);
// person.isDifferentObj = false;
// otherPerson.isSameObj = true;
// console.log(person);
// console.log(otherPerson);

// console.log(objA);
// console.log(objB);
// console.log(objA == objB);
// console.log(objA === objB);
// const objC = objA;
// console.log(objC);
// console.log(objC === objA);
// console.log(objC === objB);

// console.log(person.firstname);
// console.log(person['firstname']);
// for (const key in person) {
//   console.log('key:', key);
//   console.log('value:', person[key]);
// }

// const keysArr = Object.keys(person);
// console.log(keysArr);

// const valuesArr = Object.values(person);
// console.log(valuesArr);

// const keysAr = Object.keys(arr);
// console.log(keysAr);

// const valuesAr = Object.values(arr);
// console.log(valuesAr);

// console.log(arr.toString());
// console.log(person.toString());

// console.log(Object.toString(arr));
// console.log(Object.toString(person));

// console.log(person);
// console.log(person.valueOf());
// console.log(arr);
// console.log(arr.valueOf());

// console.log(source);
// console.log(target);
// console.log(Object.assign(target, source));
// console.log(source);
// console.log(target);

// const newPerson = Object.create(person);
// console.log(person === newPerson);
// console.log(newPerson);
// console.log(newPerson.valueOf());
// console.log(newPerson.firstname);
// console.log(newPerson.getFullname());
// newPerson.firstname = 'pepito';
// console.log(newPerson.getFullname());

// const obj = {};
// console.log(obj);
// console.log(
//   Object.defineProperties(obj, {
//     property1: {
//       value: true,
//       writable: true,
//     },
//     property2: {
//       value: 'Hello',
//       writable: false,
//     },
//   })
// );
// console.log(obj);
// console.log(obj.valueOf());
// console.log(obj.property1);
// console.log(obj.property2);

// const obj = {};
// console.log(obj);
// console.log(
//   Object.defineProperty(obj, 'property1', {
//     value: 'Hi',
//     writable: false,
//   })
// );
// console.log(obj);
// console.log(obj.valueOf());
// console.log(obj.property1);

// console.log(source);
// const ret = Object.entries(source);
// console.log(ret);
// console.log(str);
// const ret = Object.entries(str);
// console.log(ret);

// const obj = {};
// console.log(obj);
// obj.property = 'value';
// console.log(obj);
// console.log(Object.freeze(obj));
// obj.otherProperty = 'otherValue';
// console.log(obj);

// console.log(arrArr);
// const ret = Object.fromEntries(arrArr);
// console.log(ret);

// const obj = { prop1: 'value1', prop2: 'value2' };
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop1');
// console.log(descriptor);
// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);

// const obj = { prop1: 'value1', prop2: 'value2' };
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertyNames(arr));

// const obj = {};
// const symbol = Symbol();
// const symbolDes = Symbol('description');
// console.log(symbol);
// console.log(symbolDes);
// console.log(obj);
// obj[symbol] = 'symbol1';
// obj[symbolDes] = 'symbol2';
// console.log(obj);
// const ret = Object.getOwnPropertySymbols(obj);
// console.log(ret);
// console.log(ret.length);

// const prototype1 = {};
// const prototype2 = {};
// const obj = Object.create(prototype2);
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.getPrototypeOf(obj) === prototype1);
// console.log(Object.getPrototypeOf(obj) === prototype2);

// const obj = { prop: 'value' };
// console.log(Object.hasOwn(obj, 'prop'));
// console.log(Object.hasOwn(obj, 'prop1'));
// console.log(Object.hasOwn(arr, 3));
// console.log(Object.hasOwn(arr, 4));
// console.log(obj.hasOwnProperty('prop'));
// console.log(obj.hasOwnProperty('prop1'));
// console.log(arr.hasOwnProperty(3));
// console.log(arr.hasOwnProperty(4));

// console.log(emptyObj);
// const obj = Object.create(emptyObj);
// console.log(obj);
// console.log(Object.is(emptyObj, obj));
// console.log(Object.is('word', 'word'));
// console.log(Object.is(1, 1));
// console.log(Object.is(true, true));
// console.log(Object.is(['item'], ['item']));

// const obj = {};
// console.log(Object.isExtensible(obj));
// console.log(Object.freeze(obj));
// console.log(Object.isExtensible(obj));

// const obj = {};
// console.log(Object.isExtensible(obj));
// console.log(Object.preventExtensions(obj));
// console.log(Object.isExtensible(obj));

// const obj = {};
// console.log(Object.isFrozen(obj));
// console.log(Object.freeze(obj));
// console.log(Object.isFrozen(obj));

// const obj = {};
// console.log(Object.isFrozen(obj));
// console.log(Object.preventExtensions(obj));
// console.log(Object.isFrozen(obj));

// function Fn1() {}
// function Fn2() {}
// function Fn3() {}
// console.log(Fn1, Fn2, Fn3);
// console.log(Fn1.prototype, Fn2.prototype, Fn3.prototype);
// Fn2.prototype = Object.create(Fn1.prototype);
// console.log(Fn1.prototype, Fn2.prototype, Fn3.prototype);
// const fn = new Fn2();
// console.log(Fn1.prototype.isPrototypeOf(fn));
// console.log(Fn2.prototype.isPrototypeOf(fn));
// console.log(Fn3.prototype.isPrototypeOf(fn));

// const obj = { prop: 'value' };
// console.log(obj);
// obj.prop = 'change';
// obj.addProp = 'added';
// console.log(obj);
// Object.seal(obj);
// delete obj.prop;
// console.log(obj);

// const obj = { prop: 'value' };
// console.log(Object.isSealed(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));

// const obj = { prop1: 'value1' };
// obj.prop2 = 'value2';
// console.log(obj);
// Object.preventExtensions(obj);
// obj.prop1 = 'value changed';
// console.log(obj);
// obj.prop3 = 'value3';
// console.log(obj);

// const obj = { prop: 'value' };
// const array = ['element'];
// console.log(obj.propertyIsEnumerable('prop'));
// console.log(array.propertyIsEnumerable(0));
// console.log(array.propertyIsEnumerable('length'));

// function Fn1() {}
// function fn2() {}
// console.log(Fn1);
// console.log(fn2);
// Object.setPrototypeOf(fn2, Fn1.prototype);
// console.log(fn2);

// const array = [1000, 2000, 3000, 4000];
// console.log(array.toLocaleString('en-US'));
// console.log(array.toLocaleString('es-CO'));

// const obj = { prop: 'value' };
// console.log(obj.toString());
// const array = [1000, 2000, 3000, 4000];
// console.log(array.toString());

// const obj = { prop: 'value' };
// console.log(obj.valueOf());
// console.log(obj.valueOf() === obj);
