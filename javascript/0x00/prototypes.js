// constructor object or constructor function
function Animal(name) {
  // attributes or propierties
  this.name = name;
}
// add methods to object
Animal.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};
Animal.prototype.think = function () {
  console.log(`I'm thinking...`);
};
// create a instance of the object
const lion = new Animal("Mufasa");
console.log(lion);
const mouse = new Animal("Mickey");
console.log(mouse);
// use methods of the object
lion.greet();
lion.think();
mouse.greet();
mouse.think();
// Prototypical inheritance
function Dog(name, breed) {
  // invoke the constructor
  this.super = Animal;
  this.super(name);
  this.breed = breed;
}
// create a instance of the parent object
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
// create a instance of the child object
const dog = new Dog("Irma", "German shepherd");
console.log(dog);
// use methods of the parent object
dog.greet();
dog.think();
// add methods
Dog.prototype.myBreed = function () {
  console.log(`I'm a ${this.breed}`);
};
// use methods of the object
dog.myBreed();
// overwrite a parent method
Dog.prototype.think = function () {
  console.log(`Overwritten!`);
};
// ... now
dog.think();
