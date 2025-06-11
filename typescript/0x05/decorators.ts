// TypeScript Decorators: Foundations and Basic Examples

// 1. What are Decorators?
// Decorators are special functions that can modify classes, methods, properties, or parameters.
// They are prefixed with '@' and run at design time (not runtime).

// 2. Enabling Decorators
// To use decorators, enable "experimentalDecorators" in tsconfig.json:
// "experimentalDecorators": true

// 3. Class Decorator
// A function that receives the class constructor and can modify or replace it.
function Logger(constructor: Function) {
  console.log("Logger decorator called on:", constructor.name);
}

@Logger
class Person1 {
  constructor(public name: string) {}
}

// 4. Property Decorator
// A function that receives the target object and property name.
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property decorator called on: ${propertyKey}`);
}

class Product1 {
  // @ts-ignore
  @LogProperty
  price: number = 0;
}

// 5. Method Decorator
// A function that receives the target, method name, and descriptor.
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Method decorator called on: ${propertyKey}`);
}

class Calculator1 {
  // @ts-ignore
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

// 6. Accessor Decorator
// Similar to method decorator, but for getters/setters.
function LogAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor decorator called on: ${propertyKey}`);
}

class Circle1 {
  private _radius = 1;
  // @ts-ignore
  @LogAccessor
  get radius() {
    return this._radius;
  }
}

// 7. Parameter Decorator
// Receives the target, method name, and parameter index.
function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(
    `Parameter decorator called on: ${propertyKey} at position ${parameterIndex}`
  );
}

class Printer1 {
  // @ts-ignore
  print(@LogParameter message: string) {
    console.log(message);
  }
}

// Summary:
// - Decorators can be applied to classes, properties, methods, accessors, and parameters.
// - They are useful for logging, validation, metadata, dependency injection, etc.
// - Decorators are a powerful metaprogramming feature in TypeScript.
