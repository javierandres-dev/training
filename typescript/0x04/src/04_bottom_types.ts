/**
 * TypeScript Bottom Type: never
 * --------------------------
 * The 'never' type represents values that never occur.
 * Use cases for 'never':
 * 1. Functions that never return (throw errors or infinite loops)
 * 2. Functions with unreachable endpoints
 * 3. Variables that can never have a value
 * 4. Exhaustive type checking
 * 5. Impossible type intersections
 */

/**
 * TypeScript Bottom Types Examples
 * -----------------------------
 * This module demonstrates the use of bottom types in TypeScript.
 */

// Example 1: never type in exhaustive checks
type Shape = Circle | Rectangle | Triangle;

interface Circle {
    kind: "circle";
    radius: number;
    calculateArea(): number;
    calculatePerimeter(): number;
    color: string;
    getColor(): string;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
    calculateArea(): number;
    calculatePerimeter(): number;
    color: string;
    getColor(): string;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
    calculateArea(): number;
    calculatePerimeter(): number;
    color: string;
    getColor(): string;
}

function calculateShapeArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Example 2: never in error handling
type ApplicationError = ValidationError | NetworkError | DatabaseError;

interface ValidationError {
    kind: "validation";
    field: string;
    message: string;
    name: string;
}

interface NetworkError {
    kind: "network";
    code: number;
    message: string;
}

interface DatabaseError {
    kind: "database";
    code: number;
    message: string;
}

function handleApplicationError(error: ApplicationError): string {
    switch (error.kind) {
        case "validation":
            return `Validation error in field ${error.field}: ${error.message}`;
        case "network":
            return `Network error ${error.code}: ${error.message}`;
        case "database":
            return `Database error ${error.code}: ${error.message}`;
        default:
            const _exhaustiveCheck: never = error;
            return _exhaustiveCheck;
    }
}

// Example 3: Function returning never
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("This will run forever");
    }
}

// Example 4: never in conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOnly<T> = T extends string ? T : never;

// Example 5: never in union types
type NoString = never | string;  // type is string
type NeverIntersection = never & string;  // type is never

// Example 6: Function overloads with never
function processBottomValue(value: string): string;
function processBottomValue(value: number): number;
function processBottomValue(value: never): never;
function processBottomValue(value: string | number): string | number {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 2;
    }
    return value;
}

// Running examples
export function runBottomTypeExamples(): void {
    console.log("\nBottom Types Examples:");

    // Example 1: Shape calculations
    const circle: Circle = {
        kind: "circle",
        radius: 5,
        calculateArea() { return Math.PI * this.radius ** 2; },
        calculatePerimeter() { return 2 * Math.PI * this.radius; },
        color: "red",
        getColor() { return this.color; }
    };

    console.log("Circle area:", calculateShapeArea(circle));

    // Example 2: Error handling
    const validationError: ValidationError = {
        kind: "validation",
        field: "email",
        message: "Invalid email format",
        name: "ValidationError"
    };

    console.log("Error handling:", handleApplicationError(validationError));

    // Example 3: Never functions
    console.log("\nTesting never functions:");
    try {
        throwError("This is an error");
    } catch (error) {
        console.log("Caught error:", error);
    }

    // Example 4: Type manipulation
    type MaybeString = string | null | undefined;
    type DefinitelyString = NonNullable<MaybeString>;  // string
    type JustString = StringOnly<string | number>;  // string

    // Example 5: Union and intersection
    type StringType = NoString;  // string
    type NeverType = NeverIntersection;  // never

    // Example 6: Function overloads
    console.log("Processing values:");
    console.log(processBottomValue("hello"));  // "HELLO"
    console.log(processBottomValue(42));  // 84
}

runBottomTypeExamples();

/*
npm run build
node dist/04_bottom_types.js
*/ 