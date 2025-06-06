/**
 * TypeScript Functions
 * -----------------
 * This file demonstrates:
 * 1. Function Type Expressions
 * 2. Call Signatures
 * 3. Construct Signatures
 * 4. Generic Functions
 * 5. Function Overloading
 * 6. This Type
 * 7. Rest Parameters and Arguments
 * 8. Parameter Destructuring
 */

/**
 * TypeScript Functions Examples
 * -------------------------------
 * This module demonstrates various function types and patterns in TypeScript.
 */

// Example 1: Function Type Expressions
type StringTransformer = (input: string) => string;
type NumberCalculator = (a: number, b: number) => number;

const toUpperCase: StringTransformer = (input) => input.toUpperCase();
const add: NumberCalculator = (a, b) => a + b;

// Example 2: Call Signatures
interface FunctionWithDescription {
    description: string;
    (someArg: number): boolean;
}

const isPositive: FunctionWithDescription = (someArg: number) => someArg > 0;
isPositive.description = "Checks if a number is positive";

// Example 3: Construct Signatures
interface DateConstructor {
    new (year: number, month: number, day: number): Date;
}

let MyDateConstructor: DateConstructor = Date;

// Example 4: Generic Functions
function mapFn<T, U>(array: T[], fn: (item: T) => U): U[] {
    return array.map(fn);
}

// Example 5: Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// Example 6: Generic Object Type
function getObjectProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example 7: Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
        return new Date(yearOrTimestamp, month - 1, day);
    }
    return new Date(yearOrTimestamp);
}

// Example 8: Optional Parameters
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

// Example 9: Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// Example 10: Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

// Example 11: Parameter Destructuring
function printCoordinates({ x, y }: { x: number; y: number }): void {
    console.log(`Coordinates: (${x}, ${y})`);
}

// Example 12: Function Type Inference
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

// Example 13: Void Functions
function logMessage(message: string): void {
    console.log(message);
}

// Example 14: Never Type
function throwError(message: string): never {
    throw new Error(message);
}

// Example 15: Method Signatures
interface BasicCalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

class SimpleCalculator implements BasicCalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

// Running examples
export function runFunctionExamples(): void {
    console.log("\nFunction Examples:");

    // Example 1: Function Type Expressions
    console.log(toUpperCase("hello"));  // HELLO
    console.log(add(5, 3));            // 8

    // Example 2: Call Signatures
    console.log(isPositive(5));        // true
    console.log(isPositive.description);

    // Example 3: Construct Signatures
    const date = new MyDateConstructor(2023, 1, 1);
    console.log(date);

    // Example 4: Generic Functions
    const numbers = [1, 2, 3, 4, 5];
    const doubled = mapFn(numbers, n => n * 2);
    console.log("Doubled numbers:", doubled);

    // Example 5: Generic Constraints
    console.log(logLength("Hello"));     // 5
    console.log(logLength([1, 2, 3]));   // 3

    // Example 6: Generic Object Type
    const user = { name: "John", age: 30 };
    console.log(getObjectProperty(user, "name"));  // John

    // Example 7: Function Overloads
    console.log(makeDate(2023, 1, 1));
    console.log(makeDate(Date.now()));

    // Example 8: Optional Parameters
    console.log(buildName("John"));           // John
    console.log(buildName("John", "Doe"));    // John Doe

    // Example 9: Default Parameters
    console.log(greet("John"));               // Hello, John!
    console.log(greet("John", "Hi"));         // Hi, John!

    // Example 10: Rest Parameters
    console.log(sum(1, 2, 3, 4, 5));          // 15

    // Example 11: Parameter Destructuring
    printCoordinates({ x: 10, y: 20 });

    // Example 12: Function Type Inference
    console.log("Doubled numbers:", doubled);

    // Example 13: Void Functions
    logMessage("This is a void function");

    // Example 14: Never Type
    try {
        throwError("This is an error");
    } catch (error) {
        console.error(error);
    }

    // Example 15: Method Signatures
    const calculator = new SimpleCalculator();
    console.log(calculator.add(5, 3));       // 8
    console.log(calculator.subtract(10, 4));  // 6
}

runFunctionExamples();

/*
npm run build
node dist/08_functions.ts
*/ 