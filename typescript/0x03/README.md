# TypeScript Complete Learning Path

This directory contains a comprehensive guide to TypeScript, organized into multiple sections for better learning.

## Structure

1. **Basic Types** (`01_basic_types.ts`)
   - Simple Types (number, string, boolean)
   - Arrays and Tuples
   - Enums
   - Any and Unknown
   - Void, Null, and Undefined
   - Never Type
   - Object Type
   - Type Assertions

2. **Type System** (`02_type_system.ts`)
   - Interfaces
   - Type Aliases
   - Union and Intersection Types
   - Type Guards
   - Literal Types
   - Index Signatures
   - Function Types
   - Overloads

3. **Functions** (`03_functions.ts`)
   - Function Declarations
   - Arrow Functions
   - Optional and Default Parameters
   - Rest Parameters
   - This and Bind
   - Call Signatures
   - Constructor Signatures
   - Generic Functions

4. **Classes** (`04_classes.ts`)
   - Class Basics
   - Inheritance
   - Access Modifiers
   - Abstract Classes
   - Method Overriding
   - Getters/Setters
   - Static Members
   - Parameter Properties

5. **Interfaces & Types** (`05_interfaces_types.ts`)
   - Interface Declaration
   - Optional Properties
   - Readonly Properties
   - Extending Interfaces
   - Implementing Interfaces
   - Interface vs Type Alias
   - Hybrid Types
   - Interface Merging

6. **Generics** (`06_generics.ts`)
   - Generic Types
   - Generic Interfaces
   - Generic Classes
   - Generic Constraints
   - Generic Parameter Defaults
   - Generic Utility Types
   - Conditional Types
   - Mapped Types

7. **Advanced Types** (`07_advanced_types.ts`)
   - Utility Types
   - Mapped Types
   - Conditional Types
   - Template Literal Types
   - Recursive Types
   - Indexed Access Types
   - keyof Operator
   - typeof Operator

8. **Modules & Namespaces** (`08_modules.ts`)
   - ES6 Modules
   - CommonJS Modules
   - Module Resolution
   - Namespaces
   - Ambient Modules
   - Module Augmentation
   - Triple-Slash Directives
   - Path Mapping

9. **Decorators** (`09_decorators.ts`)
   - Class Decorators
   - Method Decorators
   - Property Decorators
   - Parameter Decorators
   - Decorator Factories
   - Decorator Composition
   - Metadata Reflection
   - Real-world Examples

10. **Type Manipulation** (`10_type_manipulation.ts`)
    - Type Inference
    - Type Compatibility
    - Type Widening
    - Type Narrowing
    - Fresh Objects
    - Type Predicates
    - Discriminated Unions
    - Exhaustiveness Checking

11. **Async Programming** (`11_async.ts`)
    - Promises
    - Async/Await
    - Generators
    - AsyncIterator
    - Observable Pattern
    - Event Handling
    - Error Handling
    - Cancellation

12. **Configuration** (`12_configuration.ts`)
    - tsconfig.json
    - Compiler Options
    - Project References
    - Build Tools
    - Debugging Setup
    - Linting
    - Testing
    - Best Practices

## How to Use

1. Each file contains focused examples of specific TypeScript concepts
2. Files are numbered in recommended learning order
3. Each example includes detailed comments explaining the concepts
4. Run examples using `ts-node filename.ts`

## Prerequisites

```bash
npm install -g typescript ts-node
```

## Running Examples

```bash
# Run a specific example
ts-node 01_basic_types.ts

# Or run all examples
npm test
``` 