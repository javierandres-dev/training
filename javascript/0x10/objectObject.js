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

// console.log(person.firstname);
// console.log(person['firstname']);
// for (const key in person) {
//   console.log('key:', key);
//   console.log('value:', person[key]);
// }

// const arr = Object.values(person);
// console.log(arr);
