// =================================================================
// Functions in TypeScript
// =================================================================

// -----------------------------
// 1. Function Declarations
// -----------------------------

// Named function with type annotations
function addNumbers(x: number, y: number): number {
    return x + y;
}

// Function expression
const multiply = function(x: number, y: number): number {
    return x * y;
};

// Type annotation for the entire function
let divideNumbers: (x: number, y: number) => number = 
    function(x, y) { return x / y; };

console.log('\n1. Function Declarations:', {
    addition: addNumbers(5, 3),
    multiplication: multiply(4, 2),
    division: divideNumbers(10, 2)
});

// -----------------------------
// 2. Arrow Functions
// -----------------------------

// Basic arrow function
const square = (x: number): number => x * x;

// Arrow function with multiple statements
const greet = (name: string): string => {
    const message = `Hello, ${name}!`;
    return message.toUpperCase();
};

// Generic arrow function
const firstElement = <T>(arr: T[]): T | undefined => arr[0];

console.log('\n2. Arrow Functions:', {
    square: square(4),
    greeting: greet("John"),
    first: firstElement([1, 2, 3])
});

// -----------------------------
// 3. Optional and Default Parameters
// -----------------------------

// Optional parameter
function buildName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// Default parameter
function greet(name: string, greeting = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// Optional and default parameters
function createEmail(to: string, subject = "No Subject", body?: string): object {
    return {
        to,
        subject,
        body: body ?? "(No body)"
    };
}

console.log('\n3. Optional and Default Parameters:', {
    name1: buildName("Bob"),
    name2: buildName("Bob", "Smith"),
    greeting1: greet("Alice"),
    greeting2: greet("Alice", "Hi"),
    email: createEmail("test@example.com")
});

// -----------------------------
// 4. Rest Parameters
// -----------------------------

// Rest parameters with numbers
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

// Rest parameters with tuples
function concat(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}

console.log('\n4. Rest Parameters:', {
    sum: sum(1, 2, 3, 4, 5),
    concat: concat(", ", "apple", "banana", "orange")
});

// -----------------------------
// 5. This and Bind
// -----------------------------

// Object with this context
interface Calculator {
    value: number;
    add(x: number, y: number): number;
    add(x: number): number;
    subtract(x: number): number;
    getValue(): number;
}

const calculator: Calculator = {
    value: 0,
    add(x: number, y: number = 0): number {
        this.value += x + y;
        return this.value;
    },
    subtract(x: number): number {
        this.value -= x;
        return this.value;
    },
    getValue(): number {
        return this.value;
    }
};

// Using bind to fix this context
const add5 = calculator.add.bind(calculator, 5);
const subtract2 = calculator.subtract.bind(calculator, 2);

add5();
subtract2();

console.log('\n5. This and Bind:', {
    calculatorValue: calculator.getValue()
});

// -----------------------------
// 6. Call Signatures
// -----------------------------

// Object type with call signature
type DistanceFunction = {
    (from: Coordinate, to: Coordinate): number;
    unit: string;
};

interface Coordinate {
    x: number;
    y: number;
}

// Implementation of distance function
const calculateDistance: DistanceFunction = (from: Coordinate, to: Coordinate) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    return Math.sqrt(dx * dx + dy * dy);
};

calculateDistance.unit = "meters";

const point1: Coordinate = { x: 0, y: 0 };
const point2: Coordinate = { x: 3, y: 4 };

console.log('\n6. Call Signatures:', {
    distance: calculateDistance(point1, point2),
    unit: calculateDistance.unit
});

// -----------------------------
// 7. Constructor Signatures
// -----------------------------

// Class with constructor signature
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

// Class implementation
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}

// Factory function using constructor signature
function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

console.log('\n7. Constructor Signatures:', {
    clock: createClock(DigitalClock, 12, 17)
});

// -----------------------------
// 8. Generic Functions
// -----------------------------

// Generic function
function identityFn<T>(arg: T): T {
    return arg;
}

// Generic interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}

// Generic constraints
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const myIdentity: GenericIdentityFn<number> = identityFn;

const testObj = { a: 1, b: 2, c: 3 };

console.log('\n8. Generic Functions:', {
    identity: identityFn<string>("hello"),
    numberIdentity: myIdentity(42),
    property: getPropertyValue(testObj, "b")
}); 