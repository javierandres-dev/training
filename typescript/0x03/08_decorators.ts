// =================================================================
// Decorators in TypeScript
// =================================================================

// -----------------------------
// 1. Class Decorators
// -----------------------------

// Simple class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Class decorator factory
function logger(prefix: string) {
    return function (constructor: Function) {
        console.log(`${prefix}: ${constructor.name} has been created`);
    };
}

// Class decorator with parameter
function reportableClass<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://reporting.example.com";
    };
}

@sealed
@logger("MyLogger")
@reportableClass
class Example {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// -----------------------------
// 2. Method Decorators
// -----------------------------

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned:`, result);
        return result;
    };

    return descriptor;
}

// Method decorator factory
function validate(validator: (value: any) => boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (args.every(validator)) {
                return originalMethod.apply(this, args);
            }
            throw new Error("Validation failed");
        };

        return descriptor;
    };
}

class Calculator {
    @log
    @validate((n) => typeof n === "number")
    add(a: number, b: number): number {
        return a + b;
    }
}

// -----------------------------
// 3. Property Decorators
// -----------------------------

// Property decorator
function format(formatString: string) {
    return function(target: any, propertyKey: string) {
        let value: any;

        const getter = function() {
            return formatString + value;
        };

        const setter = function(newVal: any) {
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

class User {
    @format("$")
    price: number = 0;

    @format("Mr/Ms. ")
    name: string = "";
}

// -----------------------------
// 4. Parameter Decorators
// -----------------------------

// Parameter decorator
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || [];
    requiredParams.push(parameterIndex);
    Reflect.defineMetadata('required', requiredParams, target, propertyKey);
}

// Parameter validation decorator
function validateParams(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const requiredParams: number[] = Reflect.getMetadata("required", target, propertyKey) || [];
        
        requiredParams.forEach(index => {
            if (args[index] === undefined || args[index] === null) {
                throw new Error(`Parameter at index ${index} is required.`);
            }
        });

        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class UserService {
    @validateParams
    createUser(@required name: string, @required email: string, age?: number) {
        return { name, email, age };
    }
}

// -----------------------------
// 5. Decorator Factories
// -----------------------------

// Decorator factory with options
interface LogOptions {
    before?: boolean;
    after?: boolean;
}

function logWithOptions(options: LogOptions = {}) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (options.before) {
                console.log(`Before ${propertyKey}`);
            }

            const result = originalMethod.apply(this, args);

            if (options.after) {
                console.log(`After ${propertyKey}`);
            }

            return result;
        };

        return descriptor;
    };
}

class ExampleWithOptions {
    @logWithOptions({ before: true, after: true })
    doSomething() {
        console.log("Doing something...");
    }
}

// -----------------------------
// 6. Decorator Composition
// -----------------------------

// Multiple decorators
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

class ExampleWithComposition {
    @first()
    @second()
    method() {}
}

// -----------------------------
// 7. Metadata Reflection
// -----------------------------

import "reflect-metadata";

// Define metadata
function classDecorator() {
    return function (constructor: Function) {
        Reflect.defineMetadata("custom:annotation", { name: "Example" }, constructor);
    };
}

function methodDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata("custom:annotation", { name: "Method" }, target, propertyKey);
    };
}

@classDecorator()
class ExampleWithMetadata {
    @methodDecorator()
    method() {}
}

// -----------------------------
// 8. Real-world Examples
// -----------------------------

// Route decorator for API endpoints
function Route(path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata("path", path, target, propertyKey);
    };
}

// Method decorator for HTTP methods
function GET(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata("method", "GET", target, propertyKey);
}

// Validation decorator
function ValidateInput(schema: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            // Validate input against schema
            const isValid = validateSchema(schema, args[0]);
            if (!isValid) {
                throw new Error("Invalid input");
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Example controller
class UserController {
    @Route("/users")
    @GET
    @ValidateInput({ id: "string" })
    getUser(id: string) {
        return { id, name: "John Doe" };
    }
}

// Helper function for schema validation
function validateSchema(schema: any, data: any): boolean {
    // Simple validation implementation
    return Object.keys(schema).every(key => 
        typeof data[key] === schema[key]
    );
}

// Example usage
const example = new Example("test");
const calculator = new Calculator();
const user = new User();
const userService = new UserService();
const exampleWithOptions = new ExampleWithOptions();
const userController = new UserController();

// Test the decorators
console.log('\nTesting Decorators:');

console.log('\n1. Class Decorators:');
console.log(example);

console.log('\n2. Method Decorators:');
calculator.add(5, 3);

console.log('\n3. Property Decorators:');
user.price = 100;
user.name = "John";
console.log(user);

console.log('\n4. Parameter Decorators:');
try {
    userService.createUser("John", "john@example.com", 30);
} catch (error) {
    console.error(error);
}

console.log('\n5. Decorator Factories:');
exampleWithOptions.doSomething();

console.log('\n6. Decorator Composition:');
new ExampleWithComposition().method();

console.log('\n7. Metadata Reflection:');
console.log(Reflect.getMetadata("custom:annotation", ExampleWithMetadata));

console.log('\n8. Real-world Examples:');
console.log(userController.getUser("123"));

// Example usage
@sealed
class Calculator {
    @format("$")
    price: number = 100;

    @log
    add(a: number, b: number): number {
        return a + b;
    }

    @log
    multiply(@required a: number, @required b: number): number {
        return a * b;
    }
}

const calc = new Calculator();
console.log('\n1. Decorator Examples:', {
    price: calc.price,
    sum: calc.add(5, 3),
    product: calc.multiply(4, 2)
});

// Method Decorator
function logMethod() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`Calling ${propertyKey} with args:`, args);
            const result = originalMethod.apply(this, args);
            console.log(`Method ${propertyKey} returned:`, result);
            return result;
        };

        return descriptor;
    };
}

// Property Decorator
function formatValue(formatString: string) {
    return function (target: any, propertyKey: string): any {
        const key = Symbol();

        return {
            get() {
                return formatString + (this[key] ?? '');
            },
            set(value: any) {
                this[key] = value;
            }
        };
    };
}

// Class Decorator
function sealClass<T extends { new (...args: any[]): {} }>(constructor: T) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    return constructor;
}

// Parameter Decorator
function validateParam() {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || [];
        requiredParams.push(parameterIndex);
        Reflect.defineMetadata('required', requiredParams, target, propertyKey);
    };
}

// Example usage
@sealClass
class MathCalculator {
    @formatValue('$')
    price: number = 100;

    @logMethod()
    add(a: number, b: number): number {
        return a + b;
    }

    @logMethod()
    multiply(@validateParam() a: number, @validateParam() b: number): number {
        return a * b;
    }
}

const mathCalc = new MathCalculator();
console.log('\n1. Decorator Examples:', {
    price: mathCalc.price,
    sum: mathCalc.add(5, 3),
    product: mathCalc.multiply(4, 2)
}); 