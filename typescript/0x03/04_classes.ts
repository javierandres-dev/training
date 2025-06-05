// =================================================================
// Classes in TypeScript
// =================================================================

// -----------------------------
// 1. Class Basics
// -----------------------------

// Basic class with constructor and methods
class Person {
    // Properties
    private readonly id: string;
    private name: string;
    private age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.age = age;
    }

    // Methods
    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getId(): string {
        return this.id;
    }

    // Method with parameter
    public celebrateBirthday(): void {
        this.age += 1;
        console.log(`Happy birthday! ${this.name} is now ${this.age} years old.`);
    }
}

// Creating an instance
const personInstance = new Person("Alice", 30);

console.log('\n1. Class Basics:', {
    name: personInstance.getName(),
    age: personInstance.getAge(),
    id: personInstance.getId()
});

// -----------------------------
// 2. Inheritance
// -----------------------------

// Base class
abstract class Creature {
    constructor(protected name: string) {}

    abstract makeSound(): string;

    move(distance: number = 0): string {
        return `${this.name} moved ${distance} meters.`;
    }
}

// Derived class
class Canine extends Creature {
    constructor(name: string, private breed: string) {
        super(name);
    }

    makeSound(): string {
        return "Woof!";
    }

    getBreed(): string {
        return this.breed;
    }
}

const canine = new Canine("Rex", "German Shepherd");

console.log('\n2. Inheritance:', {
    name: canine.move(),
    sound: canine.makeSound(),
    breed: canine.getBreed()
});

// -----------------------------
// 3. Access Modifiers
// -----------------------------

class BankAccount {
    private balance: number = 0;
    protected owner: string;
    public readonly accountNumber: string;

    constructor(owner: string) {
        this.owner = owner;
        this.accountNumber = Math.random().toString(36).substr(2, 9);
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }

    private generateStatement(): string {
        return `Balance: $${this.balance}`;
    }

    protected validateAmount(amount: number): boolean {
        return amount > 0;
    }
}

const account = new BankAccount("John Doe");
account.deposit(100);

console.log('\n3. Access Modifiers:', {
    accountNumber: account.accountNumber,
    balance: account.getBalance()
});

// -----------------------------
// 4. Abstract Classes
// -----------------------------

abstract class GeometricShape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    getColor(): string {
        return this.color;
    }
}

class CircleShape extends GeometricShape {
    constructor(color: string, private radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circleInstance = new CircleShape("red", 5);

console.log('\n4. Abstract Classes:', {
    color: circleInstance.getColor(),
    area: circleInstance.calculateArea(),
    perimeter: circleInstance.calculatePerimeter()
});

// -----------------------------
// 5. Method Overriding
// -----------------------------

class Vehicle {
    constructor(protected brand: string) {}

    start(): string {
        return `${this.brand} is starting...`;
    }

    stop(): string {
        return `${this.brand} is stopping...`;
    }
}

class ElectricCar extends Vehicle {
    constructor(brand: string, private batteryLevel: number) {
        super(brand);
    }

    // Override start method
    start(): string {
        return `${super.start()} [Battery Level: ${this.batteryLevel}%]`;
    }

    // Add new method
    charge(): void {
        this.batteryLevel = 100;
    }
}

const tesla = new ElectricCar("Tesla", 80);

console.log('\n5. Method Overriding:', {
    start: tesla.start(),
    stop: tesla.stop()
});

// -----------------------------
// 6. Getters/Setters
// -----------------------------

class Temperature {
    private _celsius: number = 0;

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero is not possible");
        }
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(value: number) {
        this.celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;

console.log('\n6. Getters/Setters:', {
    celsius: temp.celsius,
    fahrenheit: temp.fahrenheit
});

// -----------------------------
// 7. Static Members
// -----------------------------

class MathOperations {
    static PI: number = 3.14159;
    static readonly EULER: number = 2.71828;

    static add(x: number, y: number): number {
        return x + y;
    }

    static multiply(x: number, y: number): number {
        return x * y;
    }

    static {
        // Static initialization block
        console.log("MathOperations class initialized");
    }
}

console.log('\n7. Static Members:', {
    pi: MathOperations.PI,
    euler: MathOperations.EULER,
    add: MathOperations.add(5, 3),
    multiply: MathOperations.multiply(4, 2)
});

// -----------------------------
// 8. Parameter Properties
// -----------------------------

class Product {
    // Parameter properties shorthand
    constructor(
        public readonly id: string,
        private name: string,
        protected price: number,
        public readonly category: string
    ) {}

    // Methods using parameter properties
    getInfo(): object {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category
        };
    }
}

const product = new Product("123", "Laptop", 999.99, "Electronics");

console.log('\n8. Parameter Properties:', product.getInfo()); 