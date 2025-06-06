/**
 * TypeScript Primitive Types
 * ------------------------
 * This file demonstrates the basic primitive types in TypeScript:
 * - boolean: true/false values
 * - number: numeric values (integers and floating-point)
 * - string: text values
 * - void: typically used as return type for functions that don't return a value
 * - undefined: represents uninitialized values
 * - null: represents intentional absence of value
 */

// Boolean Type
// -----------
// Represents true/false values
const isActive: boolean = true;
const isLoggedIn: boolean = false;
console.log('\nBoolean examples:');
console.log(`isActive: ${isActive}, type: ${typeof isActive}`);
console.log(`isLoggedIn: ${isLoggedIn}, type: ${typeof isLoggedIn}`);

// Number Type
// ----------
// Represents both integer and floating-point numbers
const integer: number = 42;
const float: number = 3.14;
const negative: number = -10;
const binary: number = 0b1010; // Binary number
const octal: number = 0o744;   // Octal number
const hex: number = 0xFF;      // Hexadecimal number
console.log('\nNumber examples:');
console.log(`integer: ${integer}, type: ${typeof integer}`);
console.log(`float: ${float}, type: ${typeof float}`);
console.log(`binary: ${binary}, type: ${typeof binary}`);

// String Type
// ----------
// Represents textual data
const firstName: string = 'John';
const lastName: string = "Doe";
const greeting: string = `Hello, ${firstName} ${lastName}!`; // Template literal
console.log('\nString examples:');
console.log(`firstName: ${firstName}, type: ${typeof firstName}`);
console.log(`greeting: ${greeting}, type: ${typeof greeting}`);

// Void Type
// --------
// Used for functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
}
console.log('\nVoid example:');
logMessage('This function returns void');

// Undefined Type
// -------------
// Represents uninitialized variables
let undefinedVar: undefined;
let optionalVar: string | undefined;
console.log('\nUndefined examples:');
console.log(`undefinedVar: ${undefinedVar}, type: ${typeof undefinedVar}`);
console.log(`optionalVar: ${optionalVar}, type: ${typeof optionalVar}`);

// Null Type
// --------
// Represents intentional absence of value
const nullValue: null = null;
let nullableString: string | null = null;
console.log('\nNull examples:');
console.log(`nullValue: ${nullValue}, type: ${typeof nullValue}`);
console.log(`nullableString: ${nullableString}, type: ${typeof nullableString}`);

// Demonstrating type safety
// -----------------------
try {
    // These would cause TypeScript compilation errors:
    // const booleanError: boolean = 42;        // Error: Type 'number' is not assignable to type 'boolean'
    // const numberError: number = "42";        // Error: Type 'string' is not assignable to type 'number'
    // const stringError: string = true;        // Error: Type 'boolean' is not assignable to type 'string'
    
    console.log('\nTypeScript prevents type errors at compile time!');
} catch (error) {
    console.error('This should not execute due to compilation errors');
} 

/*
npm run build
node dist/01_primitive_types.js
*/