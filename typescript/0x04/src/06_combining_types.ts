/**
 * TypeScript Combining Types
 * -----------------------
 * This file demonstrates:
 * 1. Union Types (|): Combining multiple types with OR
 * 2. Intersection Types (&): Combining multiple types with AND
 * 3. Type Aliases: Creating custom type names
 * 4. keyof Operator: Getting the keys of a type
 */

/**
 * TypeScript Combining Types Examples
 * -------------------------------
 * This module demonstrates various ways to combine types in TypeScript.
 */

// 1. Union Types
// ------------

// Basic union type
type StringOrNumber = string | number;

// Function parameter union
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(`String ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Numeric ID: ${id.toFixed(0)}`);
    }
}

// Union with literal types
type Status = "pending" | "approved" | "rejected";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Object type with union properties
interface ApiRequest {
    method: HttpMethod;
    status: Status;
    retries: 0 | 1 | 2 | 3;
}

// 2. Intersection Types
// ------------------

// Basic shapes
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

// Combining interfaces with intersection
type PersonInfo = HasName & HasAge;

// More complex intersection
interface HasEmail {
    email: string;
}

interface HasAddress {
    address: {
        street: string;
        city: string;
        country: string;
    };
}

// Employee combines multiple interfaces
type EmployeeInfo = PersonInfo & HasEmail & HasAddress & {
    role: string;
    department: string;
};

// 3. Type Aliases
// -------------

// Simple type alias
type ID = string | number;
type Age = number;
type Email = string;

// Complex type alias
type UserProfile = {
    id: ID;
    name: string;
    age: Age;
    email: Email;
    active: boolean;
    lastLogin: Date;
};

// Recursive type alias
type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

// Function type alias
type Callback<T> = (data: T) => void;
type ErrorHandler = (error: Error) => void;
type AsyncOperation<T> = {
    execute: () => Promise<T>;
    onSuccess: Callback<T>;
    onError: ErrorHandler;
};

// 4. keyof Operator
// --------------

// Basic object type
interface ConfigSettings {
    host: string;
    port: number;
    secure: boolean;
}

// Using keyof
type ConfigKey = keyof ConfigSettings; // "host" | "port" | "secure"

// Generic function with keyof
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Type-safe object validator
type Validator<T> = {
    [K in keyof T]: (value: T[K]) => boolean;
};

// Practical Examples
// ---------------

// Example 1: API Response Handler
interface ApiSuccessResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: Date;
}

interface ApiErrorResponse {
    code: number;
    message: string;
    details?: string;
}

// Union type for API result
type ApiResult<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// Function to handle API result
function handleApiResult<T>(result: ApiResult<T>): void {
    if ("data" in result) {
        // This is ApiResponse
        console.log("Success:", result.data);
    } else {
        // This is ApiError
        console.log("Error:", result.message);
    }
}

// Example 2: Form Field Configuration
type FieldType = "text" | "number" | "email" | "password";

interface BaseField {
    name: string;
    label: string;
    required: boolean;
}

interface TextField extends BaseField {
    type: "text" | "email" | "password";
    minLength?: number;
    maxLength?: number;
}

interface NumberField extends BaseField {
    type: "number";
    min?: number;
    max?: number;
}

// Union of field types
type FormField = TextField | NumberField;

// Type for entire form configuration
type FormConfig = {
    fields: FormField[];
    submitUrl: string;
    method: HttpMethod;
};

// Example 3: Type-safe Object Manipulation
function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
        result[key] = obj[key];
    });
    return result;
}

// Example 1: Union Types
type CombinedStringOrNumber = string | number;
type CombinedStatus = "success" | "error" | "pending";

function processCombinedValue(value: CombinedStringOrNumber): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}

// Example 2: Intersection Types
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type Person = HasName & HasAge;

function createPerson(name: string, age: number): Person {
    return { name, age };
}

// Example 3: Type Guards
interface Bird {
    type: "bird";
    fly(): void;
    layEggs(): void;
}

interface Fish {
    type: "fish";
    swim(): void;
    layEggs(): void;
}

type Pet = Bird | Fish;

function isBird(pet: Pet): pet is Bird {
    return pet.type === "bird";
}

function handlePet(pet: Pet): void {
    if (isBird(pet)) {
        pet.fly();
    } else {
        pet.swim();
    }
}

// Example 4: Discriminated Unions
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function calculateCombinedArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
}

// Example 5: Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface User {
    name: string;
    age: number;
    email: string;
}

type OptionalUser = Optional<User>;
type ReadonlyUser = Readonly<User>;

// Example 6: Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;
type ExtractString<T> = T extends string ? T : never;

// Example 7: Template Literal Types
type EventName = "click" | "focus" | "blur";
type EventHandler = `on${Capitalize<EventName>}`;

// Running examples
export function runCombiningTypesExamples(): void {
    console.log("\nCombining Types Examples:");

    // Example 1: Union Types
    console.log(processCombinedValue("hello"));  // HELLO
    console.log(processCombinedValue(42));       // "42"

    // Example 2: Intersection Types
    const person = createPerson("John", 30);
    console.log("Person:", person);

    // Example 3: Type Guards
    const bird: Bird = {
        type: "bird",
        fly() { console.log("Flying..."); },
        layEggs() { console.log("Laying eggs..."); }
    };

    const fish: Fish = {
        type: "fish",
        swim() { console.log("Swimming..."); },
        layEggs() { console.log("Laying eggs..."); }
    };

    handlePet(bird);
    handlePet(fish);

    // Example 4: Discriminated Unions
    const square: Square = { kind: "square", size: 5 };
    const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
    const circle: Circle = { kind: "circle", radius: 3 };

    console.log("Square area:", calculateCombinedArea(square));
    console.log("Rectangle area:", calculateCombinedArea(rectangle));
    console.log("Circle area:", calculateCombinedArea(circle));

    // Example 5: Mapped Types
    const optionalUser: OptionalUser = { name: "John" };
    const readonlyUser: ReadonlyUser = { name: "John", age: 30, email: "john@example.com" };
    console.log("Optional user:", optionalUser);
    console.log("Readonly user:", readonlyUser);

    // Example 6: Conditional Types
    type NonNullString = NonNullable<string | null>;  // string
    type ExtractedString = ExtractString<string | number>;  // string

    // Example 7: Template Literal Types
    const handlers: EventHandler[] = ["onClick", "onFocus", "onBlur"];
    console.log("Event handlers:", handlers);
}

runCombiningTypesExamples();

/*
npm run build
node dist/06_combining_types.js
*/ 