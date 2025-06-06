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
type GenericDictionary<T> = {
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

// API response type inference
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
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
    const stringDict: GenericDictionary<string> = { key: "value" };

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