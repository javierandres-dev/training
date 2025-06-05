// =================================================================
// Generics in TypeScript
// =================================================================

// -----------------------------
// 1. Generic Functions
// -----------------------------

// Generic Functions
function genericIdentity<T>(arg: T): T {
    return arg;
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Generic arrow function
const getFirst = <T>(array: T[]): T | undefined => array[0];

console.log('\n1. Generic Functions:', {
    identity: genericIdentity<string>("hello"),
    pair: pair<string, number>("age", 25),
    first: getFirst([1, 2, 3])
});

// -----------------------------
// 2. Generic Interfaces
// -----------------------------

// Generic Interface
interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Generic Class
class GenericBox<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Generic Constraints
function getPropertySafe<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Usage examples
const numberBox = new GenericBox<number>(42);
const stringBox = new GenericBox<string>("Hello");

const response: GenericResponse<string[]> = {
    data: ["item1", "item2"],
    status: 200,
    message: "Success"
};

const obj = { name: "John", age: 30 };

console.log('\n1. Generics Examples:', {
    numberValue: numberBox.getValue(),
    stringValue: stringBox.getValue(),
    response: response,
    property: getPropertySafe(obj, "name")
});

// -----------------------------
// 3. Generic Classes
// -----------------------------

// Generic class
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

    size(): number {
        return this.items.length;
    }
}

// Using the generic class
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

console.log('\n3. Generic Classes:', {
    numberStackPeek: numberStack.peek(),
    numberStackSize: numberStack.size(),
    stringStackPop: stringStack.pop()
});

// -----------------------------
// 4. Generic Constraints
// -----------------------------

// Interface for constraint
interface Lengthwise {
    length: number;
}

// Function with constraint
function logLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

// Using keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const sampleObj = { name: "John", age: 30 };

console.log('\n4. Generic Constraints:', {
    stringLength: logLength("hello"),
    arrayLength: logLength([1, 2, 3]),
    property: getProperty(sampleObj, "name")
});

// -----------------------------
// 5. Generic Parameter Defaults
// -----------------------------

// Interface with default type
interface Container<T = string> {
    value: T;
}

// Class with default type parameter
class DataBox<T = string, U = number> {
    constructor(public key: T, public value: U) {}
}

const container: Container = { value: "default string" };
const dataBox = new DataBox("id", 123);

console.log('\n5. Generic Parameter Defaults:', {
    container,
    dataBox
});

// -----------------------------
// 6. Generic Utility Types
// -----------------------------

// Partial type
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

// Record type
type PageInfo = {
    title: string;
    url: string;
}

const pages: Record<string, PageInfo> = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" }
};

// Pick and Omit types
type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoInfo = Omit<Todo, "completed">;

const todo: Todo = {
    title: "Learn TypeScript",
    description: "Study generics",
    completed: false
};

const updated = updateTodo(todo, { completed: true });

console.log('\n6. Generic Utility Types:', {
    updatedTodo: updated,
    pages,
    todoPreview: { title: todo.title, completed: todo.completed } as TodoPreview
});

// -----------------------------
// 7. Conditional Types
// -----------------------------

// Basic conditional type
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

// Conditional type with infer
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function greeting(name: string): string {
    return `Hello, ${name}!`;
}

type GreetingReturn = FunctionReturnType<typeof greeting>;

console.log('\n7. Conditional Types:', {
    stringType: <TypeName<string>>"type",
    numberType: <TypeName<number>>"type",
    functionReturnType: <GreetingReturn>"Hello, World!"
});

// -----------------------------
// 8. Mapped Types
// -----------------------------

// Basic mapped type
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
};

// Mapped type with modifiers
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Mapped type with condition
type PickByType<T, U> = {
    [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface UserData {
    id: string;
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

type ReadonlyUser = ReadonlyType<UserData>;
type OptionalUser = Optional<UserData>;
type UserStrings = PickByType<UserData, string>;

const readonlyUser: ReadonlyUser = {
    id: "123",
    name: "John",
    age: 30,
    email: "john@example.com",
    isAdmin: false
};

console.log('\n8. Mapped Types:', {
    readonlyUser,
    optionalUser: { name: "John" } as OptionalUser,
    userStrings: { id: "123", name: "John", email: "john@example.com" } as UserStrings
}); 