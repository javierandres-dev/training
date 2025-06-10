// TypeScript Decorators Guide

import "reflect-metadata";

declare global {
    namespace Reflect {
        function getMetadata(metadataKey: string, target: Object, propertyKey: string | symbol): any;
        function defineMetadata(metadataKey: string, metadataValue: any, target: Object, propertyKey: string | symbol): void;
        function getOwnMetadata(metadataKey: string, target: Object, propertyKey: string | symbol): any;
    }
}

/*
1. Class Decorators
------------------
Decorators that modify or enhance class definitions.
Applied to the constructor of the class.
*/

// Simple class decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(`Class ${constructor.name} was created`);
    return constructor;
}

@logger
class Example {
    constructor() {
        console.log('Creating Example instance');
    }
}

// Class decorator factory with parameters
function setVersion(version: string) {
    return function<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            version = version;
        };
    };
}

@setVersion("1.0.0")
class ApiService {
    version?: string;
}

const api = new ApiService();
console.log(api.version); // Output: 1.0.0

/*
2. Method Decorators
------------------
Applied to methods within a class.
Can modify, observe, or replace method definitions.
*/

function logMethod() {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        // Store the original method
        const originalMethod = descriptor.value;

        // Replace the method with new functionality
        descriptor.value = function(...args: any[]) {
            console.log(`Calling ${String(propertyKey)} with args: ${args}`);
            const result = originalMethod.apply(this, args);
            console.log(`Result: ${result}`);
            return result;
        };

        return descriptor;
    };
}

class Calculator {
    @logMethod()
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(5, 3); // Output: Calling add with args: 5,3
                // Output: Result: 8

/*
3. Property Decorators
--------------------
Applied to class properties.
Can be used to observe or modify property definitions.
*/

function defaultValue(value: any) {
    return function (target: any, propertyKey: string) {
        let currentValue = value;

        Object.defineProperty(target, propertyKey, {
            get: () => currentValue,
            set: (newValue: any) => { currentValue = newValue; },
            enumerable: true,
            configurable: true
        });
    };
}

class Settings {
    @defaultValue("development")
    environment!: string;

    @defaultValue(3000)
    port!: number;
}

const settings = new Settings();
console.log(settings.environment); // Output: development
console.log(settings.port);       // Output: 3000

/*
4. Parameter Decorators
---------------------
Applied to parameters in class methods.
Useful for dependency injection or validation.
*/

function validateParam(target: any, propertyKey: string | symbol, parameterIndex: number) {
    const existingRequired: number[] = Reflect.getOwnMetadata("required", target, propertyKey) || [];
    existingRequired.push(parameterIndex);
    Reflect.defineMetadata("required", existingRequired, target, propertyKey);
}

class UserService {
    createUser(
        @validateParam username: string,
        @validateParam email: string,
        age?: number
    ) {
        return { username, email, age };
    }
}

/*
5. Accessor Decorators
--------------------
Applied to getters and setters.
Can modify how properties are accessed.
*/

function capitalize() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        const getter = descriptor.get;

        descriptor.get = function() {
            const value = getter?.call(this);
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            return value;
        };

        return descriptor;
    };
}

class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @capitalize()
    get name(): string {
        return this._name;
    }
}

const user = new User("john");
console.log(user.name); // Output: JOHN

/*
6. Multiple Decorators
--------------------
Multiple decorators can be applied to a single target.
They are applied in reverse order (bottom to top).
*/

function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    };
}

class MultiDecorator {
    @first()
    @second()
    method() {}
}

/*
7. Real-World Example: Validation Decorator
----------------------------------------
A practical example combining multiple concepts.
*/

function validate(validationFn: (value: any) => boolean) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const isValid = args.every(validationFn);
            if (!isValid) {
                throw new Error(`Validation failed for ${propertyKey}`);
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

class MathOperations {
    @validate((n) => typeof n === 'number' && !isNaN(n))
    multiply(...numbers: number[]): number {
        return numbers.reduce((a, b) => a * b, 1);
    }
}

const math = new MathOperations();
console.log(math.multiply(2, 3, 4));    // Output: 24
// math.multiply(2, "3", 4);            // Error: Validation failed for multiply

/*
8. Metadata Decorators
--------------------
Using TypeScript's experimental decorator metadata.
Requires "emitDecoratorMetadata": true in tsconfig.json
*/

const logType = (target: any, propertyKey: string): void => {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(`${propertyKey} type: ${type.name}`);
};

class MetadataExample {
    @logType
    name: string = "test";

    @logType
    count: number = 42;
}

// Output:
// name type: String
// count type: Number
