/**
 * Classes
 */
// class declaration
class Person1 {}
// create a new instance
const javier = new Person1();
console.log(javier);
// class expression
const Person2 = class {};
// create a new instance
const javi = new Person2();
console.log(javi);
// class declaration with constructor
class Product1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
// create a new instance
const mouse = new Product1("mouse", 10);
console.log(mouse);
// class expression with constructor
const Product2 = class {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
};
// create a new instance
const car = new Product2("suv", 20000);
console.log(car);
// class declaration with methods
class Part1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // method
  showInfo() {
    return `Name: ${this.name}, Price: ${this.price}`;
  }
  // static method
  static greet() {
    return "Hello, I'm a static method of the class.  It does not require an instance";
  }
}
// create a new instance
const keyboard = new Part1("keyboard", 11);
console.log(keyboard);
// use methods class
console.log(keyboard.showInfo());
// use static method class
console.log(Part1.greet());
// INHERITANCE
class Car extends Part1 {}
const suv = new Car("subaru", 30000);
console.log(suv);
console.log(suv.showInfo());
