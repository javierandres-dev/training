// =================================================================
// Type System in TypeScript
// =================================================================

// -----------------------------
// 1. Interfaces
// -----------------------------

// Basic interface
interface User {
    name: string;
    age: number;
    email?: string;        // Optional property
    readonly id: number;    // Read-only property
}

// Interface with method
interface Animal {
    name: string;
    makeSound(): string;
}

// Implementation
const user: User = {
    name: "John",
    age: 30,
    id: 1
};

const dog: Animal = {
    name: "Rex",
    makeSound: () => "Woof!"
};

console.log('\n1. Interfaces:', {
    user,
    dogSound: dog.makeSound()
});

// -----------------------------
// 2. Type Aliases
// -----------------------------

// Basic type alias
type Point = {
    x: number;
    y: number;
};

// Union type alias
type StringOrNumber = string | number;

// Function type alias
type CalculationFunction = (a: number, b: number) => number;

const point: Point = { x: 10, y: 20 };
const id: StringOrNumber = "abc123";
const add: CalculationFunction = (a, b) => a + b;

console.log('\n2. Type Aliases:', {
    point,
    id,
    calculation: add(5, 3)
});

// -----------------------------
// 3. Union and Intersection Types
// -----------------------------

// Union type
type TaskStatus = "pending" | "approved" | "rejected";

// Intersection type
interface WithName {
    name: string;
}

interface WithAge {
    age: number;
}

type PersonType = WithName & WithAge;

const taskStatus: TaskStatus = "approved";
const personInstance: PersonType = { name: "Jane", age: 25 };

console.log('\n3. Union and Intersection Types:', {
    status: taskStatus,
    person: personInstance
});

// -----------------------------
// 4. Type Guards
// -----------------------------

// Type guard using typeof
function processInput(x: number): number;
function processInput(x: string): string;
function processInput(x: number | string): number | string {
    if (typeof x === "number") {
        return x * 2;
    }
    return x.toUpperCase();
}

// Type guard using instanceof
class Cat {
    meow() { return "Meow!"; }
}

class Dog {
    bark() { return "Woof!"; }
}

function makeSound(animal: Cat | Dog) {
    if (animal instanceof Cat) {
        return animal.meow();
    }
    return animal.bark();
}

console.log('\n4. Type Guards:', {
    stringValue: processInput("hello"),
    numberValue: processInput(42.123),
    catSound: makeSound(new Cat()),
    dogSound: makeSound(new Dog())
});

// -----------------------------
// 5. Literal Types
// -----------------------------

// String literal type
type Theme = "light" | "dark";

// Numeric literal type
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean literal type
type Truthiness = true;

const theme: Theme = "dark";
const diceRoll: Dice = 6;

console.log('\n5. Literal Types:', {
    theme,
    diceRoll
});

// -----------------------------
// 6. Index Signatures
// -----------------------------

// Basic index signature
interface StringMap {
    [key: string]: string;
}

// Mixed property types
interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string;  // Error: Property 'name' must be of type 'number'
}

const stringMap: StringMap = {
    key1: "value1",
    key2: "value2"
};

console.log('\n6. Index Signatures:', {
    stringMap,
    key1Value: stringMap["key1"]
});

// -----------------------------
// 7. Function Types
// -----------------------------

// Function type with parameters
type Comparator<T> = (a: T, b: T) => number;

// Function type with overloads
interface StringNumberFunction {
    (str: string): number;
    (str: string, radix: number): number;
}

const sortNumbers: Comparator<number> = (a, b) => a - b;
const parseNumber: StringNumberFunction = (str: string, radix?: number) => 
    parseInt(str, radix);

console.log('\n7. Function Types:', {
    sortResult: sortNumbers(5, 3),
    parseResult: parseNumber("42")
});

// -----------------------------
// 8. Overloads
// -----------------------------

// Function overload signatures
function process(x: number): number;
function process(x: string): string;
function process(x: number | string): number | string {
    if (typeof x === "number") {
        return x * 2;
    }
    return x.toUpperCase();
}

console.log('\n8. Overloads:', {
    numberResult: process(21),
    stringResult: process("hello")
}); 