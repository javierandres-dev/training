// Object-Oriented Programming (OOP) in JavaScript Guide

/*
1. Objects
----------
Basic building blocks of OOP. Objects are collections of properties and methods.
*/

// Object literal
const person = {
    name: "John",
    age: 30,
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.sayHello()); // Output: Hello, my name is John

/*
2. Encapsulation
---------------
Bundling data and the methods that operate on that data within one unit/object.
Hiding internal details and providing an interface.
*/

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            return `New balance: ${balance}`;
        },
        getBalance: function() {
            return balance;
        }
        // withdraw method is not exposed - encapsulation
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // Output: 100
console.log(account.deposit(50));  // Output: New balance: 150
console.log(account.balance);      // Output: undefined (private variable)

/*
3. Inheritance
-------------
Mechanism that allows objects to inherit properties and methods from other objects.
*/

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating.`;
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    bark() {
        return `${this.name} is barking!`;
    }
}

const dog = new Dog("Rex");
console.log(dog.eat());  // Output: Rex is eating.
console.log(dog.bark()); // Output: Rex is barking!

/*
4. Polymorphism
--------------
Ability of objects to take multiple forms. Same function name but different implementations.
*/

class Animal2 {
    makeSound() {
        return "Some generic sound";
    }
}

class Dog2 extends Animal2 {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal2 {
    makeSound() {
        return "Meow!";
    }
}

const animals = [new Dog2(), new Cat()];
animals.forEach(animal => {
    console.log(animal.makeSound()); // Output: Woof!, Meow!
});

/*
5. Abstraction
-------------
Hide complex implementation details and show only necessary features.
*/

class Vehicle {
    constructor(type) {
        this.type = type;
    }
    
    // Abstract method - basic template
    start() {
        throw new Error("You must implement start method");
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super("car");
        this.brand = brand;
    }
    
    start() {
        this._checkFuel();        // Internal method
        this._checkBattery();     // Internal method
        return "Car is starting"; // Only shows the simple result
    }
    
    // Internal complex methods
    _checkFuel() {
        // Complex fuel system check
    }
    
    _checkBattery() {
        // Complex battery check
    }
}

const myCar = new Car("Toyota");
console.log(myCar.start()); // Output: Car is starting

/*
6. Object Composition
-------------------
Building complex objects from simpler ones, favoring composition over inheritance.
*/

// Separate behaviors into components
const hasSpeed = {
    setSpeed(speed) {
        this.speed = speed;
    },
    getSpeed() {
        return this.speed;
    }
};

const hasColor = {
    setColor(color) {
        this.color = color;
    },
    getColor() {
        return this.color;
    }
};

// Create object using composition
function createVehicle(type) {
    return {
        type,
        ...hasSpeed,
        ...hasColor
    };
}

const bike = createVehicle("bicycle");
bike.setSpeed(20);
bike.setColor("red");
console.log(bike.getSpeed()); // Output: 20
console.log(bike.getColor()); // Output: red

/*
7. SOLID Principles
------------------
Basic principles for OOP design (simplified examples)
*/

// Single Responsibility Principle
class UserAuth {
    authenticate(username, password) {
        // Only handles authentication
    }
}

class UserData {
    saveData(data) {
        // Only handles data saving
    }
}

// Open/Closed Principle
class Shape {
    area() {
        throw new Error("You must implement area method");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Calculate area for any shape without modifying existing code
function calculateArea(shape) {
    return shape.area();
}

const rect = new Rectangle(5, 4);
const circle = new Circle(3);
console.log(calculateArea(rect));   // Output: 20
console.log(calculateArea(circle)); // Output: ~28.27
