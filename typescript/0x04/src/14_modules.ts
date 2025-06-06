/**
 * TypeScript Modules
 * ----------------
 * This file demonstrates:
 * 1. Namespaces
 * 2. Ambient Modules
 * 3. External Modules
 * 4. Namespace Augmentation
 * 5. Global Augmentation
 */

// ==================
// 1. Namespaces
// ==================

// Basic namespace
namespace Validation {
    // Interface inside namespace
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    // Class inside namespace
    export class LettersOnlyValidator implements StringValidator {
        isValid(s: string): boolean {
            return /^[A-Za-z]+$/.test(s);
        }
    }

    // Class inside namespace
    export class ZipCodeValidator implements StringValidator {
        isValid(s: string): boolean {
            return /^\d{5}(-\d{4})?$/.test(s);
        }
    }
}

// Nested namespaces
namespace Geometry {
    export namespace TwoDimensional {
        export class Circle {
            constructor(public radius: number) {}

            area(): number {
                return Math.PI * this.radius ** 2;
            }
        }

        export class Rectangle {
            constructor(
                public width: number,
                public height: number
            ) {}

            area(): number {
                return this.width * this.height;
            }
        }
    }

    export namespace ThreeDimensional {
        export class Sphere {
            constructor(public radius: number) {}

            volume(): number {
                return (4/3) * Math.PI * this.radius ** 3;
            }
        }

        export class Cube {
            constructor(public side: number) {}

            volume(): number {
                return this.side ** 3;
            }
        }
    }
}

// ==================
// 2. Ambient Modules
// ==================

// Example of ambient declarations (normally in .d.ts files)
declare namespace ExternalMathLib {
    function add(x: number, y: number): number;
    function subtract(x: number, y: number): number;
    function multiply(x: number, y: number): number;
    function divide(x: number, y: number): number;
}

// Example of module with namespace
namespace JsonModule {
    export interface JsonContent {
        [key: string]: any;
    }

    export function parse(content: string): JsonContent {
        return JSON.parse(content);
    }
}

// ==================
// 3. External Modules
// ==================

// Export declaration
export interface User {
    id: number;
    name: string;
    email: string;
}

// Export class
export class UserService {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUser(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }
}

// Export function
export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Export constant
export const MAX_USERS = 100;

// Default export
export default class UserManager {
    private service: UserService;

    constructor() {
        this.service = new UserService();
    }

    createUser(name: string, email: string): User {
        const user: User = {
            id: Math.floor(Math.random() * 1000),
            name,
            email
        };
        this.service.addUser(user);
        return user;
    }
}

// ==================
// 4. Namespace Augmentation
// ==================

// Original namespace
namespace Animals {
    export class Dog {
        bark(): string {
            return "Woof!";
        }
    }
}

// Augment the Animals namespace
namespace Animals {
    export class Cat {
        meow(): string {
            return "Meow!";
        }
    }

    export interface Pet {
        name: string;
        age: number;
    }

    // Augment existing Dog class
    export interface Dog {
        breed: string;
    }
}

// ==================
// 5. Global Augmentation
// ==================

// Augment the global scope
declare global {
    // Add to existing String interface
    interface String {
        toTitleCase(): string;
    }

    // Add to existing Array interface
    interface Array<T> {
        toUnique(): T[];
    }

    // Add new global type
    type Nullish<T> = T | null;

    // Add new global interface
    interface GlobalConfig {
        apiUrl: string;
        timeout: number;
    }
}

// Implement the augmented String method
String.prototype.toTitleCase = function(): string {
    return this.replace(/\w\S*/g, txt => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

// Implement the augmented Array method
Array.prototype.toUnique = function<T>(): T[] {
    return [...new Set(this)];
};

// Running examples
function runExamples(): void {
    // 1. Namespaces
    console.log("\n1. Namespaces:");
    const letterValidator = new Validation.LettersOnlyValidator();
    const zipValidator = new Validation.ZipCodeValidator();
    
    console.log("Letters only:", letterValidator.isValid("Hello"));  // true
    console.log("Letters only:", letterValidator.isValid("Hello123"));  // false
    console.log("Zip code:", zipValidator.isValid("12345"));  // true
    console.log("Zip code:", zipValidator.isValid("12345-6789"));  // true

    const circle = new Geometry.TwoDimensional.Circle(5);
    const sphere = new Geometry.ThreeDimensional.Sphere(5);
    console.log("Circle area:", circle.area());
    console.log("Sphere volume:", sphere.volume());

    // 2. Ambient Modules and JSON Module
    console.log("\n2. Ambient Modules and JSON Module:");
    const jsonString = '{"name": "John", "age": 30}';
    const parsedJson = JsonModule.parse(jsonString);
    console.log("Parsed JSON:", parsedJson);

    // 3. External Modules
    console.log("\n3. External Modules:");
    const userManager = new UserManager();
    const user = userManager.createUser("John Doe", "john@example.com");
    console.log("Created user:", user);
    console.log("Valid email:", validateEmail(user.email));

    // 4. Namespace Augmentation
    console.log("\n4. Namespace Augmentation:");
    const dog = new Animals.Dog();
    const cat = new Animals.Cat();
    console.log("Dog says:", dog.bark());
    console.log("Cat says:", cat.meow());

    // 5. Global Augmentation
    console.log("\n5. Global Augmentation:");
    const text = "hello world";
    console.log("Title case:", text.toTitleCase());

    const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    console.log("Unique numbers:", numbers.toUnique());
}

// Run all examples
runExamples();

/*
npm run build
node dist/14_modules.ts
*/ 