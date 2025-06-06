/**
 * TypeScript Interfaces
 * ------------------
 * This file demonstrates:
 * 1. Basic Interface Declaration
 * 2. Types vs Interfaces
 * 3. Extending Interfaces
 * 4. Interface Declaration Merging
 * 5. Hybrid Types (Function & Object)
 */

/**
 * TypeScript Interfaces Examples
 * -------------------------------
 * This module demonstrates various interface patterns in TypeScript.
 */

// 1. Basic Interface Declaration
// --------------------------

// Object interface
interface IUserData {
    readonly id: number;        // Readonly property
    name: string;              // Required property
    email?: string;            // Optional property
    age?: number;              // Optional property
    [key: string]: any;        // Index signature - allows additional properties
}

// Implementation
const userData: IUserData = {
    id: 1,
    name: "John Doe",
    age: 30,
    customField: "Extra data"  // Allowed by index signature
};

// Function interface
interface Greetable {
    greet(name: string): string;
}

class Greeter implements Greetable {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

// 2. Types vs Interfaces
// -------------------

// Interface - can be extended and merged
interface Animal {
    name: string;
    makeSound(): void;
}

// Type - more flexible union and intersection types
type Pet = {
    name: string;
    owner: string;
};

// Union type - only possible with type
type Species = "dog" | "cat" | "bird";

// Intersection type - only possible with type
type DomesticAnimal = Animal & Pet;

// Interface extending a type
interface Dog extends Animal {
    breed: string;
    species: Species;  // Using the union type
}

// 3. Extending Interfaces
// --------------------

// Base interface
interface IVehicle {
    readonly brand: string;
    readonly model: string;
    readonly year: number;
    readonly vin: string;
}

// Single inheritance
interface ICar extends IVehicle {
    readonly doors: number;
    readonly type: "sedan" | "suv" | "hatchback";
}

// Multiple inheritance
interface IElectricCar extends ICar {
    readonly batteryCapacity: number;
    readonly range: number;
}

// Implementation
const tesla: IElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    vin: "1HGCM82633A123456",
    doors: 4,
    type: "sedan",
    batteryCapacity: 82,
    range: 358
};

// 4. Interface Declaration Merging
// ----------------------------

// Generic response interface
interface IApiResponse<T> {
    readonly status: number;
    readonly message: string;
    readonly data: T;
    readonly timestamp: number;
}

// User list interface
interface IUserList {
    readonly users: IUserData[];
    readonly total: number;
}

const userListResponse: IApiResponse<IUserList> = {
    status: 200,
    message: "Success",
    data: {
        users: [userData],
        total: 1
    },
    timestamp: Date.now()
};

// 5. Hybrid Types (Function & Object)
// -------------------------------

// Interface describing a function with properties
interface Counter {
    // Function signature
    (start: number): number;
    
    // Properties
    interval: number;
    reset(): void;
    increment(): void;
}

// Creating a hybrid type instance
function createCounter(): Counter {
    let current = 0;
    let interval = 1;

    // Create the base function
    const counter = function(start: number) {
        current = start;
        return current;
    } as Counter;

    // Add properties
    counter.interval = interval;
    counter.reset = function() {
        current = 0;
    };
    counter.increment = function() {
        current += interval;
    };

    return counter;
}

// Using the hybrid type
const counter = createCounter();
console.log(counter(10));      // Sets start to 10
counter.increment();           // Increments by interval
counter.interval = 2;          // Changes increment interval
counter.increment();           // Increments by new interval
counter.reset();              // Resets to 0

// Advanced Interface Examples
// -----------------------

// Generic interface
interface IRepository<T> {
    get(id: number): T;
    save(item: T): void;
    delete(id: number): void;
    list(): T[];
}

// Implementation with generics
class UserRepository implements IRepository<IUserData> {
    private users: IUserData[] = [];

    get(id: number): IUserData {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new Error("User not found");
        return user;
    }

    save(user: IUserData): void {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index >= 0) {
            this.users[index] = user;
        } else {
            this.users.push(user);
        }
    }

    delete(id: number): void {
        const index = this.users.findIndex(u => u.id === id);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }

    list(): IUserData[] {
        return [...this.users];
    }
}

// Recursive interface
interface IBinaryTreeNode<T> {
    readonly value: T;
    readonly left?: IBinaryTreeNode<T>;
    readonly right?: IBinaryTreeNode<T>;
}

// Usage of recursive interface
const tree: IBinaryTreeNode<number> = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 }
    },
    right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 }
    }
};

// Utility type with mapped types
type ValidatorFn<T> = (value: T) => boolean;

type Validators<T> = {
    [P in keyof T]?: ValidatorFn<T[P]>;
};

// Usage of utility type
interface IProduct {
    readonly name: string;
    readonly price: number;
    readonly stock: number;
}

const productValidators: Validators<IProduct> = {
    name: (name) => name.length > 0,
    price: (price) => price > 0,
    stock: (stock) => stock >= 0
};

// Example 1: Basic Interface
interface InterfaceUser {
    name: string;
    age: number;
    email?: string;
}

function createUser(user: InterfaceUser): InterfaceUser {
    return user;
}

// Example 2: Method Interface
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Woof!");
    }
}

// Example 3: Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}

// Example 4: Index Signatures
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Hello", "World"];

// Example 5: Call Signatures
interface MathFunc {
    (x: number, y: number): number;
}

const addFunc: MathFunc = (a: number, b: number): number => a + b;

// Example 6: Construct Signatures
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick(): void {
        console.log("beep beep");
    }
}

// Example 7: Extending Interfaces
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const square: Square = {
    color: "blue",
    sideLength: 10
};

// Example 8: Hybrid Types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = function(start: number) { return start.toString(); } as Counter;
    counter.interval = 123;
    counter.reset = function() { console.log("reset!"); };
    return counter;
}

// Example 9: Interface Merging
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

const box: Box = { height: 5, width: 6, scale: 10 };

// Example 10: Generic Interfaces
interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}

interface UserData {
    id: number;
    username: string;
}

const response: GenericResponse<UserData> = {
    data: { id: 1, username: "john" },
    status: 200,
    message: "Success"
};

// Running examples
export function runInterfaceExamples(): void {
    console.log("\nInterface Examples:");

    // Example 1: Basic Interface
    const user: InterfaceUser = createUser({
        name: "John",
        age: 30,
        email: "john@example.com"
    });
    console.log("User:", user);

    // Example 2: Method Interface
    const dog = new Dog("Rex");
    dog.makeSound();

    // Example 3: Readonly Properties
    const point: Point = { x: 10, y: 20 };
    console.log("Point:", point);
    // point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

    // Example 4: Index Signatures
    console.log("Array item:", myArray[0]);

    // Example 5: Call Signatures
    console.log("Add result:", addFunc(5, 3));

    // Example 6: Construct Signatures
    const clock = new DigitalClock(12, 17);
    clock.tick();

    // Example 7: Extending Interfaces
    console.log("Square:", square);

    // Example 8: Hybrid Types
    const counter = getCounter();
    console.log(counter(10));
    console.log("Counter interval:", counter.interval);
    counter.reset();

    // Example 9: Interface Merging
    console.log("Box:", box);

    // Example 10: Generic Interfaces
    console.log("Response:", response);
}

runInterfaceExamples();

/*
npm run build
node dist/09_interfaces.ts
*/ 