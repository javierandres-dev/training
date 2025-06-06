/**
 * TypeScript Type Assertions and Non-null Assertions
 * ----------------------------------------------
 * This file demonstrates:
 * 
 * 1. Type Assertions:
 *    - Using 'as' syntax
 *    - Using angle bracket syntax
 *    - Const assertions
 *    - Safe type assertions
 * 
 * 2. Non-null Assertions:
 *    - Using the '!' operator
 *    - Handling optional properties
 *    - Best practices and warnings
 */

/**
 * TypeScript Type Assertions Examples
 * -------------------------------
 * This module demonstrates type assertions in TypeScript.
 */

// Example 1: Basic Type Assertions
interface UserForm {
    name: string;
    email?: string;
    password?: string;
}

function processFormString(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error("Value must be a string");
}

// Example 2: Type Assertions with as
function assertAsNumber(value: unknown): number {
    return (value as number) * 2;
}

// Example 3: Type Assertions with angle brackets
function assertWithBrackets(value: unknown): string {
    return (<string>value).toLowerCase();
}

// Example 4: Type Assertions with Objects
interface TypeAssertionUser {
    id: number;
    name: string;
    email?: string;
}

function processUserData(data: unknown): TypeAssertionUser {
    const user = data as TypeAssertionUser;
    return user;
}

// Example 5: Type Assertions with Arrays
function processArrayData(data: unknown): string[] {
    if (Array.isArray(data)) {
        return (data as string[]).map(item => item.toUpperCase());
    }
    throw new Error("Data must be an array");
}

// Example 6: Type Assertions with Classes
class TypeAssertionResponse<T> {
    constructor(
        public data: T,
        public status: number,
        public message: string
    ) {}
}

function processResponse(response: unknown): TypeAssertionResponse<unknown> {
    return response as TypeAssertionResponse<unknown>;
}

// Example 7: Type Assertions with Non-null
function processNonNull(value: string | null): string {
    return value!.toUpperCase();
}

// Example 8: Type Assertions with Interfaces
interface TypeAssertionConfig {
    apiUrl: string;
    timeout: number;
}

function processConfig(config: unknown): TypeAssertionConfig {
    return config as TypeAssertionConfig;
}

// Running examples
export function runTypeAssertionExamples(): void {
    console.log("\nType Assertion Examples:");

    // Example 1: Basic Type Assertions
    try {
        console.log(processFormString("hello"));
        console.log(processFormString(42)); // This will throw
    } catch (error) {
        console.error("Error:", error);
    }

    // Example 2: Type Assertions with as
    console.log(assertAsNumber(42));

    // Example 3: Type Assertions with angle brackets
    console.log(assertWithBrackets("HELLO"));

    // Example 4: Type Assertions with Objects
    const userData = {
        id: 1,
        name: "John",
        email: "john@example.com"
    };
    console.log(processUserData(userData));

    // Example 5: Type Assertions with Arrays
    try {
        console.log(processArrayData(["hello", "world"]));
    } catch (error) {
        console.error("Error:", error);
    }

    // Example 6: Type Assertions with Classes
    const response = new TypeAssertionResponse("data", 200, "OK");
    console.log(processResponse(response));

    // Example 7: Type Assertions with Non-null
    try {
        console.log(processNonNull("hello"));
        // console.log(processNonNull(null)); // This would throw at runtime
    } catch (error) {
        console.error("Error:", error);
    }

    // Example 8: Type Assertions with Interfaces
    const config = {
        apiUrl: "https://api.example.com",
        timeout: 5000
    };
    console.log(processConfig(config));
}

runTypeAssertionExamples();

// 1. Type Assertions
// ----------------

// Basic type assertion
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
// Alternative syntax (not used in TSX/JSX files):
// let strLength: number = (<string>someValue).length;

// Complex object assertion
interface User {
    id: number;
    name: string;
    email?: string;
}

// Asserting object structure
const userInputData: unknown = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};

const user = userInputData as User;
console.log("\nUser after assertion:", user);

// Multiple assertions (assertion chains)
const rawData: unknown = "123";
const numValue = (rawData as string) as unknown as number;

// Const assertions
const colors = ["red", "green", "blue"] as const;
// Now colors is readonly tuple: readonly ["red", "green", "blue"]

const configSettings = {
    api: "https://api.example.com",
    timeout: 3000,
    retries: 3
} as const;
// All properties are now readonly

// Safe type assertions with type guards
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Value must be a string");
    }
}

function processString(value: unknown) {
    assertIsString(value);
    // TypeScript now knows value is a string
    console.log(value.toUpperCase());
}

// 2. Non-null Assertions
// -------------------

// Basic non-null assertion
function processUsername(username: string | null | undefined) {
    // Using ! to assert username is not null or undefined
    console.log(username!.toUpperCase());
}

// Optional chaining vs non-null assertion
interface Article {
    title: string;
    author?: {
        name: string;
        bio?: string;
    };
}

function getAuthorBio(article: Article): string {
    // Using non-null assertion (dangerous)
    // return article.author!.bio!;

    // Better approach using optional chaining and nullish coalescing
    return article.author?.bio ?? "No bio available";
}

// Non-null assertions with DOM
class DOMHandler {
    private element: HTMLElement | null = null;

    initialize() {
        this.element = document.getElementById("app");
    }

    // Using non-null assertion when we're sure element exists
    getElement(): HTMLElement {
        // Only use ! when you're absolutely sure element is not null
        return this.element!;
    }

    // Better approach: explicit null check
    getElementSafe(): HTMLElement {
        if (!this.element) {
            throw new Error("Element not initialized");
        }
        return this.element;
    }
}

// Practical Examples
// ---------------

// Example 1: Type assertion with API response
interface ApiResponse {
    data: {
        users: User[];
        total: number;
    };
    status: number;
}

function handleApiResponse(response: unknown) {
    // Type assertion for API response
    const typedResponse = response as ApiResponse;
    console.log(`Total users: ${typedResponse.data.users.length}`);
}

// Example 2: Mixed type assertions and non-null assertions
interface FormData {
    email?: string;
    password?: string;
}

function validateForm(form: FormData) {
    // Using type assertion and non-null assertion together
    const email = (form.email as string).trim();
    const password = form.password!;

    // Better approach:
    if (!form.email || !form.password) {
        throw new Error("Email and password are required");
    }

    const safeEmail = form.email.trim();
    const safePassword = form.password;
    
    return { safeEmail, safePassword };
}

// Example 3: Const assertions with literal types
function createOptions() {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-cache" as const
    } as const;
}

// Best Practices Summary
// -------------------
/*
1. Type Assertions:
   - Use 'as' syntax instead of angle brackets
   - Avoid double assertions when possible
   - Use const assertions for readonly values
   - Create custom type guards for complex assertions

2. Non-null Assertions:
   - Avoid using ! when possible
   - Prefer optional chaining and nullish coalescing
   - Add explicit null checks for better safety
   - Document when and why you use non-null assertions
*/

/*
npm run build
node dist/05_type_assertions.js
*/ 