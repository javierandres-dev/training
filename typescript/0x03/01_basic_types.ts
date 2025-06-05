// =================================================================
// Basic Types in TypeScript
// =================================================================

// -----------------------------
// 1. Simple Types
// -----------------------------

// number: All numeric values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// string: Text values
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;

// boolean: true/false values
let isDone: boolean = false;

console.log('\n1. Simple Types:', {
    numbers: { decimal, hex, binary, octal, big },
    strings: { color, fullName, sentence },
    boolean: isDone
});

// -----------------------------
// 2. Arrays and Tuples
// -----------------------------

// Arrays: Two ways to declare
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple: Fixed-length array where each element has its own type
let tuple: [string, number, boolean] = ["hello", 10, true];

// Tuple with optional elements
let optionalTuple: [string, number?] = ["hello"];

// Rest elements in tuple
let restTuple: [number, ...string[]] = [1, "hello", "world"];

console.log('\n2. Arrays and Tuples:', {
    arrays: { list1, list2 },
    tuple,
    optionalTuple,
    restTuple
});

// -----------------------------
// 3. Enums
// -----------------------------

// Numeric enum
enum Direction {
    Up = 1,
    Down,      // 2
    Left,      // 3
    Right      // 4
}

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

// Heterogeneous enum
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

console.log('\n3. Enums:', {
    direction: Direction.Up,
    color: Color.Red,
    mixed: BooleanLikeHeterogeneousEnum.Yes
});

// -----------------------------
// 4. Any and Unknown
// -----------------------------

// any: Opt-out of type checking
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// unknown: Type-safe any
let uncertain: unknown = 4;
uncertain = "maybe a string";
// Need type checking before use
if (typeof uncertain === "string") {
    console.log(uncertain.toUpperCase());
}

console.log('\n4. Any and Unknown:', {
    any: notSure,
    unknown: uncertain
});

// -----------------------------
// 5. Void, Null, and Undefined
// -----------------------------

// void: Absence of any type
function warnUser(): void {
    console.log("This is a warning message");
}

// null and undefined
let u: undefined = undefined;
let n: null = null;

console.log('\n5. Void, Null, and Undefined:', {
    void: warnUser(),
    undefined: u,
    null: n
});

// -----------------------------
// 6. Never Type
// -----------------------------

// never: Values that never occur
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

// Function returning never must not have a reachable end point
function fail() {
    return error("Something failed");
}

// -----------------------------
// 7. Object Type
// -----------------------------

// object: Non-primitive type
let basicObj: object = { prop: 0 };

// Object type with specific structure
let typedObj: { name: string; age: number } = {
    name: "John",
    age: 30
};

console.log('\n7. Object Type:', {
    object: basicObj,
    typedObject: typedObj
});

// -----------------------------
// 8. Type Assertions
// -----------------------------

// Type assertion using angle-bracket syntax
let someValue: unknown = "this is a string";
let strLength1: number = (<string>someValue).length;

// Type assertion using as syntax
let strLength2: number = (someValue as string).length;

console.log('\n8. Type Assertions:', {
    assertionLength1: strLength1,
    assertionLength2: strLength2
});

// -----------------------------
// 9. Literal Types
// -----------------------------

// String literal types
type Easing = "ease-in" | "ease-out" | "ease-in-out";
let easing: Easing = "ease-in";

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 6;

console.log('\n9. Literal Types:', {
    easing,
    diceRoll: roll
});

// -----------------------------
// 10. Symbol Type
// -----------------------------

// Symbols are immutable and unique
let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key"); // sym2 !== sym3

const symObj = {
    [sym1]: "value1",
    [sym2]: "value2"
};

console.log('\n10. Symbol Type:', {
    symbolKey: sym2.toString(),
    symbolEquality: sym2 === sym3,
    symbolObject: Object.getOwnPropertySymbols(symObj).length
}); 