/**
 * TypeScript Top Types: unknown and any
 * ----------------------------------
 * This file demonstrates the two top types in TypeScript:
 * 
 * 1. unknown: The type-safe counterpart of 'any'
 *    - Requires type checking before use
 *    - Forces explicit type assertions
 *    - Safer alternative to 'any'
 * 
 * 2. any: The "escape hatch" from type checking
 *    - Bypasses type checking
 *    - Should be avoided when possible
 *    - Useful for gradual migration from JavaScript
 */

/**
 * TypeScript Top Types Examples
 * --------------------------
 * This module demonstrates the use of top types in TypeScript.
 */

// Example 1: any type
let anyValue: any = 42;
anyValue = "Hello";
anyValue = true;
anyValue = { x: 10 };
anyValue = [1, 2, 3];

// Example 2: unknown type
let unknownValue: unknown = 42;
unknownValue = "Hello";
unknownValue = true;
unknownValue = { x: 10 };
unknownValue = [1, 2, 3];

// Example 3: Type Assertions with unknown
function processUnknownValue(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value.toString();
    }
    return String(value);
}

// Example 4: Type Guards with unknown
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

// Example 5: Working with Objects
interface User {
    name: string;
    age: number;
}

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value &&
        "age" in value &&
        typeof (value as User).name === "string" &&
        typeof (value as User).age === "number"
    );
}

// Example 6: Async Functions with unknown
async function fetchUnknownData(): Promise<unknown> {
    try {
        const response = await fetch("https://api.example.com/data");
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

// Example 7: Type Assertions vs Type Guards
function processDataSafely(data: unknown): string {
    // Using type guard (safe)
    if (isString(data)) {
        return data.toUpperCase();
    }

    // Using type assertion (unsafe)
    return (data as string).toUpperCase();
}

// Running examples
export function runTopTypeExamples(): void {
    console.log("\nTop Types Examples:");

    // Example 1: any type
    console.log("Any type examples:");
    console.log(anyValue);

    // Example 2: unknown type
    console.log("\nUnknown type examples:");
    console.log(unknownValue);

    // Example 3: Type Assertions with unknown
    console.log("\nProcessing unknown values:");
    console.log(processUnknownValue("hello"));
    console.log(processUnknownValue(42));
    console.log(processUnknownValue(true));

    // Example 4: Type Guards
    console.log("\nType guards:");
    const values: unknown[] = ["hello", 42, true];
    values.forEach(value => {
        if (isString(value)) {
            console.log(`String: ${value.toUpperCase()}`);
        } else if (isNumber(value)) {
            console.log(`Number: ${value.toFixed(2)}`);
        }
    });

    // Example 5: Working with Objects
    console.log("\nWorking with objects:");
    const userObj = { name: "John", age: 30 };
    if (isUser(userObj)) {
        console.log(`User: ${userObj.name}, Age: ${userObj.age}`);
    }

    // Example 6: Async Functions
    console.log("\nFetching data:");
    fetchUnknownData()
        .then(data => console.log("Fetched data:", data))
        .catch(error => console.error("Error:", error));

    // Example 7: Type Assertions vs Type Guards
    console.log("\nType assertions vs guards:");
    try {
        console.log(processDataSafely("hello"));
        console.log(processDataSafely(42)); // This will throw an error
    } catch (error) {
        console.error("Error in type assertion:", error);
    }
}

runTopTypeExamples();

/*
npm run build
node dist/03_top_types.js
*/ 