// =================================================================
// TYPESCRIPT EXAMPLES BY TOPIC
// =================================================================
/*
Each section demonstrates ONE clear example of a TypeScript concept.
The examples are designed to be:
1. Easy to understand
2. Practical
3. Self-contained
4. Demonstrative of best practices
*/

import { Person, Vehicle, VehicleWithPrice, Box } from './src/types/common';

// =================================================================
// 1. Basic Types
// =================================================================
/*
Demonstrates: 
- Type annotations
- Type inference
- Basic type usage
*/

interface BasicPerson {
    name: string;
    age: number;
    isActive: boolean;
    hobbies: string[];
    role: [string, number];
}

const basicPerson: BasicPerson = {
    name: "John",
    age: 30,
    isActive: true,
    hobbies: ["reading", "music"],
    role: ["admin", 1]
};

console.log('\n1. Basic Types Example:', {
    person: basicPerson
});

// =================================================================
// 2. Interfaces & Type Aliases
// =================================================================
/*
Demonstrates:
- Interface definition
- Optional properties
- Readonly properties
- Type aliases
*/

interface Vehicle {
    readonly id: number;
    make: string;
    model: string;
    year: number;
    color?: string;  // Optional property
}

type VehicleWithPrice = Vehicle & {
    price: number;
};

const myCar = new Vehicle("Toyota", "Camry", 2022);
myCar.start();
myCar.stop();

console.log('\n2. Interfaces Example:', {
    vehicle: myCar
});

// =================================================================
// 3. Functions
// =================================================================
/*
Demonstrates:
- Function types
- Optional parameters
- Default parameters
- Rest parameters
*/

function calculateTotal(
    price: number,
    taxRate: number = 0.1,
    discount?: number,
    ...itemIds: number[]
): number {
    const subtotal = price * (1 + taxRate);
    const discountAmount = discount || 0;
    console.log('Items processed:', itemIds);
    return subtotal * (1 - discountAmount);
}

console.log('\n3. Functions Example:', {
    total: calculateTotal(100, 0.2, 0.1, 1, 2, 3),
    simpleTotal: calculateTotal(100)
});

// =================================================================
// 4. Classes
// =================================================================
/*
Demonstrates:
- Class definition
- Access modifiers
- Inheritance
- Abstract classes
*/

interface Car {
    brand: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

interface CarWithPrice extends Car {
    price: number;
}

class CarImpl implements Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    start(): void {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}

class CarWithPriceImpl extends CarImpl implements CarWithPrice {
    constructor(
        brand: string,
        model: string,
        year: number,
        public price: number
    ) {
        super(brand, model, year);
    }
}

const carInstance = new CarWithPriceImpl("Toyota", "Camry", 2022, 25000);
carInstance.start();
carInstance.stop();

console.log('\n4. Classes Example:', {
    vehicle: carInstance
});

// =================================================================
// 5. Generics
// =================================================================
/*
Demonstrates:
- Generic class
- Type constraints
- Generic methods
*/

class BoxImpl<T> implements Box<T> {
    constructor(private content: T) {}

    getValue(): T {
        return this.content;
    }
}

const numberBoxInstance = new BoxImpl<number>(42);
const stringBoxInstance = new BoxImpl<string>("Hello TypeScript");

console.log('\n5. Generics Example:', {
    numberValue: numberBoxInstance.getValue(),
    stringValue: stringBoxInstance.getValue()
});

// =================================================================
// 6. Type Manipulation
// =================================================================
/*
Demonstrates:
- Utility types
- Mapped types
- Conditional types
- Template literal types
*/

// Custom mapped type
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

// Pick specific properties and make them nullable
type PickNullable<T, K extends keyof T> = {
    [P in K]: T[P] | null;
};

// Template literal type
type EventName<T extends string> = `${T}Changed`;
type UserEvents = EventName<'name' | 'email' | 'password'>;

// Conditional type with infer
type ArrayElementType<T> = T extends Array<infer E> ? E : never;

// Examples using the type manipulations
interface UserProfile {
    readonly id: number;
    readonly email: string;
    displayName: string;
}

// Make readonly properties mutable
type MutableUser = Mutable<UserProfile>;

// Make specific properties nullable
type UserWithNullableProfile = PickNullable<UserProfile, 'displayName' | 'email'>;

// Infer array element type
type StringArrayType = ArrayElementType<string[]>; // string
type NumberArrayType = ArrayElementType<number[]>; // number

const mutableUser: MutableUser = {
    id: 1,
    email: "test@example.com",
    displayName: "Test User"
};

// Now we can modify the previously readonly properties
mutableUser.id = 2;
mutableUser.email = "new@example.com";

console.log('\n6. Type Manipulation Example:', {
    mutableUser,
    possibleEvents: {} as Record<UserEvents, boolean>,
    arrayTypes: {
        stringArray: {} as StringArrayType,
        numberArray: {} as NumberArrayType
    }
});

// =================================================================
// 7. Null Safety
// =================================================================
/*
Demonstrates:
- Optional chaining
- Nullish coalescing
- Type guards
*/

interface UserSettings {
    theme?: {
        darkMode?: boolean;
        fontSize?: number;
    };
}

function getUserPreferences(settings: UserSettings | null): string {
    const fontSize = settings?.theme?.fontSize ?? 16;
    const darkMode = settings?.theme?.darkMode ?? false;
    return `Font Size: ${fontSize}, Dark Mode: ${darkMode}`;
}

console.log('\n7. Null Safety Example:', {
    preferences: getUserPreferences({ theme: { fontSize: 14 } }),
    defaults: getUserPreferences(null)
});

// =================================================================
// 8. Async Programming
// =================================================================
/*
Demonstrates:
- Promises
- Async/await
- Type-safe async operations
*/

interface ApiResponse<T> {
    data: T | null;
    error?: string;
}

async function fetchUserData(id: number): Promise<ApiResponse<Person>> {
    // Simulated API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: person
            });
        }, 100);
    });
}

async function displayUser(id: number): Promise<void> {
    const response = await fetchUserData(id);
    console.log('\n8. Async Programming Example:', {
        userData: response.data,
        hasError: 'error' in response
    });
}

// Call async function
displayUser(1);

// =================================================================
// 9. Error Handling
// =================================================================
/*
Demonstrates:
- Custom errors
- Type-safe error handling
- Result pattern
*/

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

function divide(a: number, b: number): Result<number> {
    if (b === 0) {
        return {
            success: false,
            error: new Error('Division by zero')
        };
    }
    return {
        success: true,
        value: a / b
    };
}

console.log('\n9. Error Handling Example:', {
    validDivision: divide(10, 2),
    invalidDivision: divide(10, 0)
});

// =================================================================
// 10. Decorators
// =================================================================
/*
Demonstrates:
- Class decorator
- Method decorator
- Property decorator
*/

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with:`, args);
        return original.apply(this, args);
    };
    return descriptor;
}

// Class with decorator
class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
console.log('\n10. Decorators Example:', {
    result: calc.add(5, 3)
});

console.log('\nExample Results:', {
    person: basicPerson,
    vehicle: carInstance,
    numberValue: numberBoxInstance.getValue(),
    stringValue: stringBoxInstance.getValue()
});