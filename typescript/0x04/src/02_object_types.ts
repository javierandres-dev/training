/**
 * TypeScript Object Types
 * ---------------------
 * This file demonstrates the object-related types in TypeScript:
 * - Interface: Contract for object structure
 * - Class: Blueprint for creating objects
 * - Enum: Set of named constants
 * - Array: Collection of elements
 * - Tuple: Fixed-length array with specific types
 * - Object: Generic object type
 */

/**
 * TypeScript Object Types Examples
 * ------------------------------
 * This module demonstrates various object types in TypeScript.
 */

// Interface
// ---------
// Defines a contract for object structure
interface Vehicle {
    readonly brand: string;
    readonly model: string;
    readonly year: number;
    readonly make: string;
    getInfo(): string;
    getMake(): string;
    getModel(): string;
    getYear(): number;
    startEngine(): string;
}

// Example 1: Basic Object Type
class Car implements Vehicle {
    constructor(
        public readonly brand: string,
        public readonly model: string,
        public readonly year: number,
        public readonly make: string,
        public readonly isElectric: boolean,
        public readonly vin: string
    ) {}

    getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    startEngine(): string {
        return this.isElectric 
            ? "Silent electric motor starting..." 
            : "Vroom! Engine started!";
    }
}

// Example 2: Object Type with Methods
const car = new Car("Tesla", "Model 3", 2023, "Tesla", true, "5YJ3E1EA1JF000123");

// Example 3: Array of Objects
const vehicles: Vehicle[] = [
    new Car("Toyota", "Camry", 2022, "Toyota", false, "2T1KR32E37C123456"),
    new Car("Honda", "Civic", 2023, "Honda", false, "1HGFA16526L123456")
];

// Example 4: Array Types
const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];

// Example 5: Type Aliases
type ObjectConfig = {
    debug: boolean;
    timeout: number;
    retries: number;
};

const config: ObjectConfig = {
    debug: true,
    timeout: 3000,
    retries: 3
};

// Example 6: Index Signatures
interface ObjectDictionary {
    [key: string]: string;
}

const headers: ObjectDictionary = {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
};

// Example 7: Optional Properties
interface UserProfile {
    name: string;
    age?: number;
    email?: string;
}

const user: UserProfile = {
    name: "John Doe",
    age: 30
};

// Running examples
export function runObjectTypeExamples(): void {
    console.log('\nObject Type Examples:');
    console.log('Car:', car.getInfo());
    console.log('Car engine:', car.startEngine());
    console.log('Vehicles:', vehicles.map(v => v.getInfo()));
    console.log('Numbers:', numbers);
    console.log('Names:', names);
    console.log('Config:', config);
    console.log('Headers:', headers);
    console.log('User:', user);
}

runObjectTypeExamples();

// Class
// -----
// Blueprint for creating objects with methods and properties
class Person {
    // Private property with '#'
    #id: number;

    constructor(
        private name: string,
        protected age: number,
        public email: string
    ) {
        this.#id = Math.random();
    }

    // Method
    public introduce(): string {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
    }

    // Getter
    get personId(): string {
        return `ID-${this.#id}`;
    }
}

// Class inheritance
class Employee extends Person {
    constructor(
        name: string,
        age: number,
        email: string,
        public position: string
    ) {
        super(name, age, email);
    }

    // Method override
    public introduce(): string {
        return `${super.introduce()} I work as a ${this.position}.`;
    }
}

const employee = new Employee("John Doe", 30, "john@example.com", "Developer");
console.log('\nClass example:');
console.log(employee.introduce());
console.log('Employee ID:', employee.personId);

// Enum
// ----
// Set of named constants
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// Numeric enum
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

const userRole: UserRole = UserRole.Admin;
const statusCode: HttpStatus = HttpStatus.OK;

console.log('\nEnum examples:');
console.log('User Role:', userRole);
console.log('HTTP Status:', statusCode);

// Array
// -----
// Collection of elements of the same type
console.log('\nArray examples:');
console.log('Numbers:', numbers);
console.log('Names:', names);
console.log('Vehicles:', vehicles);

// Tuple
// -----
// Fixed-length array with specific types
type Coordinates = [number, number]; // Latitude, Longitude
type NameAge = [string, number];
type HttpResponse = [number, string, any]; // Status, Message, Data

const coordinates: Coordinates = [40.7128, -74.0060]; // New York coordinates
const person: NameAge = ["Alice", 25];
const response: HttpResponse = [200, "Success", { data: "Some data" }];

console.log('\nTuple examples:');
console.log('Location:', coordinates);
console.log('Person:', person);
console.log('HTTP Response:', response);

// Object
// ------
// Generic object type and object literal
console.log('\nObject examples:');
console.log('Config:', config);
console.log('Headers:', headers);

// Demonstrating type safety
// -----------------------
try {
    // These would cause TypeScript compilation errors:
    // car.vin = "NewVIN";                     // Error: Cannot assign to 'vin' because it is a read-only property
    // const invalidCar: Vehicle = { brand: "Toyota" }; // Error: Missing required properties
    // const invalidTuple: Coordinates = [1, 2, 3];     // Error: Too many elements
    // const invalidRole: UserRole = "SUPERADMIN";      // Error: "SUPERADMIN" is not a valid UserRole
    
    console.log('\nTypeScript prevents type errors at compile time!');
} catch (error) {
    console.error('This should not execute due to compilation errors');
}

/*
npm run build
node dist/02_object_types.js
*/ 