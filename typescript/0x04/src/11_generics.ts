/**
 * TypeScript Generics
 * ----------------
 * This file demonstrates:
 * 1. Basic Generic Types
 * 2. Generic Constraints
 * 3. Generic Classes
 * 4. Generic Interfaces
 * 5. Generic Type Aliases
 * 6. Generic Utility Types
 * 7. Generic Type Inference
 * 8. Generic Type Defaults
 */

/**
 * TypeScript Generics Examples
 * -------------------------------
 * This module demonstrates various generic patterns in TypeScript.
 */

// 1. Basic Generic Types
// -------------------

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic array function
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// 2. Generic Constraints
// ------------------

// Using extends keyword
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): number {
    console.log(`Length: ${arg.length}`);
    return arg.length;
}

// Constraint using keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Multiple constraints
interface HasId {
    id: number;
}

interface HasName {
    name: string;
}

function merge<T extends HasId & HasName>(obj: T): string {
    return `${obj.id}: ${obj.name}`;
}

// 3. Generic Classes
// --------------

// Basic generic class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

// Generic stack implementation
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// 4. Generic Interfaces
// -----------------

// Generic interface
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: number;
}

// Generic repository interface
interface Repository<T extends HasId> {
    findById(id: number): T | undefined;
    save(item: T): void;
    delete(id: number): boolean;
    findAll(): T[];
}

// Implementation of generic repository
class InMemoryRepository<T extends HasId> implements Repository<T> {
    private items: Map<number, T> = new Map();

    findById(id: number): T | undefined {
        return this.items.get(id);
    }

    save(item: T): void {
        this.items.set(item.id, item);
    }

    delete(id: number): boolean {
        return this.items.delete(id);
    }

    findAll(): T[] {
        return Array.from(this.items.values());
    }
}

// 5. Generic Type Aliases
// -------------------

// Generic type alias
type Nullable<T> = T | null;

// Generic function type
type Mapper<T, U> = (item: T) => U;

// Generic tuple type
type Pair<T> = [T, T];

// Generic object type
type Dictionary<T> = {
    [key: string]: T;
};

// 6. Generic Utility Types
// --------------------

// Custom Pick implementation
type CustomPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Custom Readonly implementation
type CustomReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Custom Partial implementation
type CustomPartial<T> = {
    [P in keyof T]?: T[P];
};

// Custom Record implementation
type CustomRecord<K extends keyof any, T> = {
    [P in K]: T;
};

// 7. Generic Type Inference
// ---------------------

// Array type inference
function map<T, U>(array: T[], fn: (item: T) => U): U[] {
    return array.map(fn);
}

// Promise type inference
async function fetchData<T>(url: string): Promise<Response<T>> {
    const response = await fetch(url);
    const data = await response.json();
    return {
        data,
        status: response.status,
        message: response.statusText,
        timestamp: Date.now()
    };
}

// 8. Generic Type Defaults
// --------------------

// Interface with default type
interface Container<T = string> {
    value: T;
    tag?: string;
}

// Class with default type
class Queue<T = number> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

// Running Examples
// -------------

function runExamples(): void {
    // Basic Generic Types
    console.log("\nBasic Generic Types:");
    console.log(identity<string>("Hello"));
    console.log(identity(42)); // Type inference
    console.log(firstElement([1, 2, 3]));
    console.log(pair("key", 123));

    // Generic Constraints
    console.log("\nGeneric Constraints:");
    console.log(logLength("Hello")); // String has length
    console.log(logLength([1, 2, 3])); // Array has length
    
    const obj = { name: "John", age: 30 };
    console.log(getProperty(obj, "name"));

    const user = { id: 1, name: "Alice" };
    console.log(merge(user));

    // Generic Classes
    console.log("\nGeneric Classes:");
    const numberBox = new Box<number>(42);
    console.log(numberBox.getValue());

    const stack = new Stack<string>();
    stack.push("First");
    stack.push("Second");
    console.log(stack.pop());
    console.log(stack.peek());

    // Generic Interfaces
    console.log("\nGeneric Interfaces:");
    interface User extends HasId, HasName {
        email: string;
    }

    const userRepo = new InMemoryRepository<User>();
    userRepo.save({ id: 1, name: "Bob", email: "bob@example.com" });
    console.log(userRepo.findById(1));

    // Generic Type Aliases
    console.log("\nGeneric Type Aliases:");
    const nullableString: Nullable<string> = null;
    const stringToNumber: Mapper<string, number> = (s) => s.length;
    const numberPair: Pair<number> = [1, 2];
    const stringDict: Dictionary<string> = { key: "value" };

    console.log({ nullableString, numberPair, stringDict });
    console.log(stringToNumber("Hello"));

    // Generic Type Inference
    console.log("\nGeneric Type Inference:");
    const numbers = [1, 2, 3, 4, 5];
    const doubled = map(numbers, n => n * 2);
    console.log(doubled);

    // Generic Type Defaults
    console.log("\nGeneric Type Defaults:");
    const defaultContainer: Container = { value: "default" };
    const numberContainer: Container<number> = { value: 42 };
    
    const queue = new Queue(); // defaults to number
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue());
}

// Run all examples
runExamples();

/*
npm run build
node dist/10_generics.ts
*/ 

// Example 1: Generic Functions
function mapGeneric<T, U>(array: T[], fn: (item: T) => U): U[] {
    return array.map(fn);
}

function getPropertyGeneric<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example 2: Generic Interfaces
interface Address {
    street: string;
    city: string;
    country: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: Address;
    greet(): string;
}

interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: number;
}

// Example 3: Generic Classes
class GenericContainer<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// Example 4: Generic Type Aliases
type GenericDictionary<T> = {
    [key: string]: T;
};

type GenericPair<T, U> = {
    first: T;
    second: U;
};

// Example 5: Generic Constraints
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(item: T): number {
    return item.length;
}

// Example 6: Generic Type Guards
function isGenericArray<T>(value: unknown): value is T[] {
    return Array.isArray(value);
}

// Example 7: Async Generic Functions
async function fetchDataGeneric<T>(url: string): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data,
            status: response.status,
            message: response.statusText,
            timestamp: Date.now()
        };
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
}

// Example 8: Generic Type Inference
function createPair<T, U>(first: T, second: U): GenericPair<T, U> {
    return { first, second };
}

// Example 9: Generic Parameter Defaults
interface GenericState<T = string> {
    data: T;
    loading: boolean;
    error?: Error;
}

// Example 10: Generic Type Guards
function isArrayOfType<T>(arr: unknown, typeGuard: (item: unknown) => item is T): arr is T[] {
    return Array.isArray(arr) && arr.every(typeGuard);
}

// Example 11: Generic Mapped Types
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
};

// Example 12: Generic Conditional Types
type NonNullableType<T> = T extends null | undefined ? never : T;

// Example 13: Generic Utility Types
interface GenericUser {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<GenericUser>;
type ReadonlyUser = Readonly<GenericUser>;
type PickUser = Pick<GenericUser, "id" | "name">;
type RecordUser = Record<"active" | "inactive", GenericUser>;

// Running examples
export function runGenericExamples(): void {
    console.log("\nGeneric Examples:");

    // Example 1: Generic Functions
    console.log(identity<string>("hello"));
    console.log(identity<number>(42));

    // Example 2: Generic Interfaces
    const stringContainer = new GenericContainer("Hello");
    const numberContainer = new GenericContainer(42);
    console.log("String container:", stringContainer.getValue());
    console.log("Number container:", numberContainer.getValue());

    // Example 3: Generic Classes
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log("Stack peek:", stack.peek());
    console.log("Stack pop:", stack.pop());
    console.log("Stack is empty:", stack.isEmpty());

    // Example 4: Generic Constraints
    console.log("String length:", getLength("hello"));
    console.log("Array length:", getLength([1, 2, 3]));

    // Example 5: Generic Type Aliases
    const pair = createPair("key", 42);
    console.log("Pair:", pair);

    // Example 6: Generic Parameter Defaults
    const state: GenericState = {
        data: "loading...",
        loading: true
    };
    console.log("State:", state);

    // Example 7: Generic Type Guards
    const numbers = [1, 2, 3, 4, 5];
    const isNumber = (value: unknown): value is number => typeof value === "number";
    console.log("Is array of numbers:", isArrayOfType(numbers, isNumber));

    // Example 8: Generic Mapped Types
    const immutableUser: ReadonlyType<GenericUser> = {
        id: 1,
        name: "John",
        email: "john@example.com"
    };
    console.log("Immutable user:", immutableUser);

    // Example 9: Generic Conditional Types
    type NonNullString = NonNullableType<string | null>;
    const text: NonNullString = "Hello";
    console.log("Non-null text:", text);

    // Example 10: Generic Utility Types
    const partialUser: PartialUser = { name: "John" };
    const readonlyUser: ReadonlyUser = { id: 1, name: "John", email: "john@example.com" };
    const pickedUser: PickUser = { id: 1, name: "John" };
    const userRecord: RecordUser = {
        active: { id: 1, name: "John", email: "john@example.com" },
        inactive: { id: 2, name: "Jane", email: "jane@example.com" }
    };
    console.log("Partial user:", partialUser);
    console.log("Readonly user:", readonlyUser);
    console.log("Picked user:", pickedUser);
    console.log("User record:", userRecord);

    // Example 11: Generic API Response
    const apiResponse: ApiResponse<GenericUser> = {
        data: { id: 1, name: "John", email: "john@example.com" },
        status: 200,
        message: "Success",
        timestamp: Date.now()
    };
    console.log("API Response:", apiResponse);
}

runGenericExamples(); 