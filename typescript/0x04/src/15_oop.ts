// Object-Oriented Programming in TypeScript Guide

/*
0. The Four Pillars of OOP
-------------------------
The fundamental concepts that form the foundation of object-oriented programming.
*/

// 0.1 Encapsulation
// -----------------
// Bundling data and methods that operate on that data within a single unit,
// hiding internal details and providing an interface.

class BankAccountBasic {
    private balance: number = 0;  // Private data

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccountBasic();
myAccount.deposit(100);
console.log(myAccount.getBalance());  // Output: 100
// console.log(myAccount.balance);    // Error: balance is private

// 0.2 Inheritance
// --------------
// Mechanism that allows a class to inherit properties and methods from another class.

class BasicAnimal {
    constructor(protected name: string) {}
    
    eat(): string {
        return `${this.name} is eating.`;
    }
}

class BasicDog extends BasicAnimal {
    bark(): string {
        return `${this.name} says woof!`;
    }
}

const myDog = new BasicDog("Rex");
console.log(myDog.eat());   // Output: Rex is eating.
console.log(myDog.bark());  // Output: Rex says woof!

// 0.3 Polymorphism
// ---------------
// Ability of objects to take multiple forms, allowing us to perform
// the same action in different ways.

interface SoundMaker {
    makeSound(): string;
}

class BasicBird extends BasicAnimal implements SoundMaker {
    makeSound(): string {
        return "Tweet tweet!";
    }
}

class BasicCat extends BasicAnimal implements SoundMaker {
    makeSound(): string {
        return "Meow!";
    }
}

function makeAnimalSound(animal: SoundMaker): string {
    return animal.makeSound();
}

const myBird = new BasicBird("Tweety");
const myCat = new BasicCat("Whiskers");
console.log(makeAnimalSound(myBird));  // Output: Tweet tweet!
console.log(makeAnimalSound(myCat));   // Output: Meow!

// 0.4 Abstraction
// --------------
// Hide complex implementation details and show only necessary features of an object.

abstract class PaymentProcessor {
    abstract processPayment(amount: number): boolean;
    
    processRefund(amount: number): boolean {
        // Common implementation for all payment processors
        return this.processPayment(-amount);
    }
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): boolean {
        // Complex credit card processing logic hidden from users
        console.log(`Processing ${amount}$ via Credit Card...`);
        return true;
    }
}

class PayPalProcessor extends PaymentProcessor {
    processPayment(amount: number): boolean {
        // Complex PayPal processing logic hidden from users
        console.log(`Processing ${amount}$ via PayPal...`);
        return true;
    }
}

const creditCard = new CreditCardProcessor();
const paypal = new PayPalProcessor();

creditCard.processPayment(100);  // Output: Processing 100$ via Credit Card...
paypal.processPayment(50);      // Output: Processing 50$ via PayPal...

/*
1. Basic Class with Types
------------------------
TypeScript adds type safety to classes. Properties and methods can have explicit types.
*/

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person1 = new Person("Alice", 25);
console.log(person1.introduce()); // Output: Hi, I'm Alice and I'm 25 years old.

/*
2. Access Modifiers
------------------
TypeScript provides access modifiers: public, private, and protected.
*/

class BankAccount {
    private balance: number;
    protected accountNumber: string;
    public accountType: string;

    constructor(initialBalance: number, accountNumber: string, type: string) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
        this.accountType = type;
    }

    public getBalance(): number {
        return this.balance;
    }

    private generateStatement(): string {
        return `Balance: ${this.balance}`;
    }
}

const account = new BankAccount(1000, "123456", "savings");
console.log(account.accountType);  // OK: public property
// console.log(account.balance);   // Error: private property
// console.log(account.generateStatement()); // Error: private method

/*
3. Interface Implementation
-------------------------
Interfaces define contracts that classes must follow.
*/

interface Vehicle {
    start(): void;
    stop(): void;
    speed: number;
}

class Car implements Vehicle {
    speed: number = 0;

    start(): void {
        console.log("Car started");
    }

    stop(): void {
        console.log("Car stopped");
    }

    accelerate(increment: number): void {
        this.speed += increment;
    }
}

/*
4. Abstract Classes
-----------------
Abstract classes provide a base class with some implemented and some abstract methods.
*/

abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;

    displayColor(): string {
        return `This shape is ${this.color}`;
    }
}

class Rectangle extends Shape {
    constructor(
        color: string,
        private width: number,
        private height: number
    ) {
        super(color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle("red", 5, 3);
console.log(rect.calculateArea());  // Output: 15
console.log(rect.displayColor());   // Output: This shape is red

/*
5. Generics in Classes
---------------------
Generic classes can work with different types while maintaining type safety.
*/

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
console.log(textStorage.getItems()); // Output: ["Hello", "World"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // Output: [10, 20]

/*
6. Property Shorthand and Readonly
--------------------------------
TypeScript provides shortcuts for declaring properties and making them immutable.
*/

class Employee {
    constructor(
        readonly id: number,
        public name: string,
        private readonly salary: number
    ) {}

    getSalary(): number {
        return this.salary;
    }
}

const emp = new Employee(1, "John", 50000);
console.log(emp.name);      // OK
// emp.id = 2;             // Error: readonly
// emp.salary = 60000;     // Error: private and readonly

/*
7. Static Members
---------------
Static properties and methods belong to the class itself, not instances.
*/

class MathUtils {
    static PI: number = 3.14159;
    static readonly GOLDEN_RATIO: number = 1.618;

    static calculateCircleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI);  // Output: 3.14159
console.log(MathUtils.calculateCircleArea(5));  // Output: ~78.54

/*
8. Method Overriding
------------------
Child classes can override methods from parent classes.
*/

class Animal {
    makeSound(): string {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => {
    console.log(animal.makeSound()); // Output: Woof!, Meow!
});

/*
9. Singleton Pattern
------------------
Ensure a class has only one instance.
*/

class Singleton {
    private static instance: Singleton;
    private constructor() {} // Private constructor

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Method of the singleton");
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
