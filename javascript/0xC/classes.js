// JavaScript Classes Guide

/*
0. Simple Class (Without Constructor)
-----------------------------------
A basic class that doesn't require initialization parameters.
Methods can be added directly and the class can be used without constructor.
*/

class Circle {
  radius = 10; // Default property
  
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle();
console.log(circle.radius); // Output: 10
console.log(circle.getArea());      // Output: ~314.16
console.log(circle.getPerimeter()); // Output: ~62.83

/*
1. Class Declaration
-------------------
Basic syntax to create a class in JavaScript.
*/

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Output: Toyota

/*
2. Constructor Method
--------------------
Special method for initializing object properties.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("John", 30);
console.log(person1.name, person1.age); // Output: John 30

/*
3. Class Methods
---------------
Functions that belong to the class.
*/

class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));      // Output: 8
console.log(calc.subtract(10, 4)); // Output: 6

/*
4. Static Methods
----------------
Methods that belong to the class itself, not instances.
*/

class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(5)); // Output: 25
// Note: We don't need to create an instance using 'new'

/*
5. Getters and Setters
----------------------
Special methods for getting and setting values.
*/

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(value) {
    this._celsius = value;
  }
  
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);    // Output: 25
console.log(temp.fahrenheit); // Output: 77
temp.celsius = 30;
console.log(temp.fahrenheit); // Output: 86

/*
6. Class Inheritance
-------------------
Creating a class that inherits from another class.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks!`;
  }
}

const dog = new Dog("Rex");
console.log(dog.speak()); // Output: Rex barks!

/*
7. Super Keyword
---------------
Used to call methods from the parent class.
*/

class Bird extends Animal {
  constructor(name, canFly) {
    super(name); // Call parent constructor
    this.canFly = canFly;
  }
  
  speak() {
    return `${super.speak()} Tweet tweet!`;
  }
}

const parrot = new Bird("Rio", true);
console.log(parrot.speak()); // Output: Rio makes a sound. Tweet tweet!

/*
8. Private Class Fields
----------------------
Properties that can only be accessed within the class (using # prefix).
*/

class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
// console.log(account.#balance); // This would cause an error
