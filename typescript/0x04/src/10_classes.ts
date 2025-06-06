/**
 * TypeScript Classes
 * ----------------
 * This file demonstrates TypeScript class features:
 * 1. Constructor Parameters
 * 2. Access Modifiers
 * 3. Abstract Classes
 * 4. Inheritance
 * 5. Polymorphism
 * 6. Method Overriding
 * 7. Constructor Overloading
 */

/**
 * TypeScript Classes Examples
 * -------------------------------
 * This module demonstrates various class patterns in TypeScript.
 */

// ==================
// 1. Constructor Parameters
// ==================

// Traditional way
class Individual {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// Using parameter properties (shorthand)
class Staff {
    constructor(
        private readonly id: number,
        private name: string,
        public department: string,
        private salary: number
    ) {}

    public getInfo(): string {
        return `${this.name} works in ${this.department}`;
    }

    protected getSalary(): number {
        return this.salary;
    }
}

// ==================
// 2. Access Modifiers
// ==================

class BankAccount {
    private balance: number;
    protected accountNumber: string;
    public readonly bank: string;

    constructor(initialBalance: number, accountNumber: string, bank: string) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
        this.bank = bank;
    }

    // Public method - accessible everywhere
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Private method - only accessible within this class
    private validateAmount(amount: number): boolean {
        return amount > 0 && amount <= this.balance;
    }

    // Protected method - accessible within this class and its subclasses
    protected getBalance(): number {
        return this.balance;
    }
}

// ==================
// 3. Abstract Classes
// ==================

abstract class AbstractShape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    public getColor(): string {
        return this.color;
    }
}

class Circle extends AbstractShape {
    constructor(
        color: string,
        private radius: number
    ) {
        super(color);
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends AbstractShape {
    constructor(
        color: string,
        private width: number,
        private height: number
    ) {
        super(color);
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// ==================
// 4. Inheritance
// ==================

class Animal {
    constructor(
        private name: string,
        private age: number
    ) {}

    public makeSound(): string {
        return "Some generic sound";
    }

    public getInfo(): string {
        return `${this.name} is ${this.age} years old`;
    }

    protected getName(): string {
        return this.name;
    }

    protected getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    constructor(
        name: string,
        age: number,
        private breed: string
    ) {
        super(name, age);
    }

    public makeSound(): string {
        return "Woof!";
    }

    public getBreed(): string {
        return this.breed;
    }
}

class Cat extends Animal {
    constructor(
        name: string,
        age: number,
        private indoor: boolean
    ) {
        super(name, age);
    }

    public makeSound(): string {
        return "Meow!";
    }

    public isIndoor(): boolean {
        return this.indoor;
    }
}

// ==================
// 5. Polymorphism
// ==================

class Zoo {
    private animals: Animal[] = [];

    public addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    public makeAllSounds(): string[] {
        return this.animals.map(animal => animal.makeSound());
    }

    public getAllInfo(): string[] {
        return this.animals.map(animal => animal.getInfo());
    }
}

// ==================
// 6. Method Overriding
// ==================

class Vehicle {
    constructor(
        private make: string,
        private model: string,
        private year: number
    ) {}

    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }

    protected getMake(): string {
        return this.make;
    }

    protected getModel(): string {
        return this.model;
    }

    protected getYear(): number {
        return this.year;
    }

    public startEngine(): string {
        return "Engine started";
    }
}

class ElectricCar extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        private batteryCapacity: number
    ) {
        super(make, model, year);
    }

    // Override base class method
    public startEngine(): string {
        return "Electric motor initialized";
    }

    // Add new method
    public getBatteryInfo(): string {
        return `Battery capacity: ${this.batteryCapacity}kWh`;
    }
}

// ==================
// 7. Constructor Overloading
// ==================

class MathCalculator {
    private result: number = 0;

    constructor(initialValue?: number) {
        if (initialValue !== undefined) {
            this.result = initialValue;
        }
    }

    public calculate(value: number): number;
    public calculate(a: number, b: number): number;
    public calculate(a: number, b?: number): number {
        if (b === undefined) {
            this.result += a;
        } else {
            this.result = a + b;
        }
        return this.result;
    }

    public getValue(): number {
        return this.result;
    }
}

// Example 1: Basic Class
class ExamplePerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// Example 2: Access Modifiers
class ExampleBankAccount {
    private balance: number;
    protected id: string;
    public owner: string;

    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this.balance = initialBalance;
        this.id = Math.random().toString(36).substr(2, 9);
    }

    public getBalance(): number {
        return this.balance;
    }

    protected validateAmount(amount: number): boolean {
        return amount > 0 && amount <= this.balance;
    }

    public withdraw(amount: number): boolean {
        if (this.validateAmount(amount)) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

// Example 3: Inheritance
class ExampleAnimal {
    constructor(protected name: string) {}

    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class ExampleSnake extends ExampleAnimal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 5): void {
        console.log("Slithering...");
        super.move(distance);
    }
}

// Example 4: Abstract Classes
abstract class ExampleShape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class ExampleCircle extends ExampleShape {
    constructor(
        color: string,
        private radius: number
    ) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Example 5: Interfaces Implementation
interface ExampleVehicle {
    make: string;
    model: string;
    start(): void;
    stop(): void;
}

class ExampleCar implements ExampleVehicle {
    constructor(public make: string, public model: string) {}

    start(): void {
        console.log(`${this.make} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.make} ${this.model} is stopping...`);
    }
}

// Example 6: Getters and Setters
class Temperature {
    private _celsius: number = 0;

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(value: number) {
        this._celsius = (value - 32) * 5/9;
    }
}

// Example 7: Static Members
class MathOperations {
    static PI: number = 3.14159;

    static add(x: number, y: number): number {
        return x + y;
    }

    static multiply(x: number, y: number): number {
        return x * y;
    }
}

// Example 8: Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Example 9: Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

// Example 10: Method Decorators
class ExampleCalculator {
    add(x: number, y: number): number {
        console.log(`Adding ${x} and ${y}`);
        return x + y;
    }
}

// Running examples
export function runClassExamples(): void {
    console.log("\nClass Examples:");

    // Example 1: Basic Class
    const person = new ExamplePerson("John", 30);
    console.log(person.greet());

    // Example 2: Access Modifiers
    const account = new ExampleBankAccount("John Doe", 1000);
    console.log("Balance:", account.getBalance());
    account.withdraw(500);
    console.log("New balance:", account.getBalance());

    // Example 3: Inheritance
    const snake = new ExampleSnake("Python");
    snake.move();

    // Example 4: Abstract Classes
    const circle = new ExampleCircle("red", 5);
    console.log("Circle area:", circle.calculateArea());
    console.log("Circle color:", circle.getColor());

    // Example 5: Interfaces Implementation
    const car = new ExampleCar("Tesla", "Model 3");
    car.start();
    car.stop();

    // Example 6: Getters and Setters
    const temp = new Temperature();
    temp.celsius = 25;
    console.log("Celsius:", temp.celsius);
    console.log("Fahrenheit:", temp.fahrenheit);

    // Example 7: Static Members
    console.log("PI:", MathOperations.PI);
    console.log("Add:", MathOperations.add(5, 3));
    console.log("Multiply:", MathOperations.multiply(4, 2));

    // Example 8: Singleton Pattern
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    console.log("Same instance:", instance1 === instance2);

    // Example 9: Generic Classes
    const queue = new Queue<string>();
    queue.push("first");
    queue.push("second");
    console.log("Queue item:", queue.pop());

    // Example 10: Method Decorators
    const calc = new ExampleCalculator();
    calc.add(5, 3);
}

runClassExamples();

/*
npm run build
node dist/10_classes.ts
*/ 