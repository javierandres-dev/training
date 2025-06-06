/**
 * TypeScript Type Guards and Type Narrowing Examples
 * -------------------------------
 * This module demonstrates type guards and type narrowing in TypeScript.
 */

// Example 1: typeof Type Guard
function processGuardedValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}

// Example 2: instanceof Type Guard
class GuardedError extends Error {
    constructor(public code: number, message: string) {
        super(message);
    }
}

function handleGuardedError(error: unknown): void {
    if (error instanceof GuardedError) {
        console.log(`Error ${error.code}: ${error.message}`);
    } else if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log("Unknown error:", error);
    }
}

// Example 3: in Operator Type Guard
interface GuardedUser {
    name: string;
    email: string;
}

interface GuardedAdmin {
    name: string;
    role: string;
}

function processEntity(entity: GuardedUser | GuardedAdmin): void {
    if ("email" in entity) {
        console.log(`User email: ${entity.email}`);
    } else {
        console.log(`Admin role: ${entity.role}`);
    }
}

// Example 4: Custom Type Guards
interface GuardedBird {
    type: "bird";
    fly(): void;
}

interface GuardedFish {
    type: "fish";
    swim(): void;
}

type GuardedAnimal = GuardedBird | GuardedFish;

function isGuardedBird(animal: GuardedAnimal): animal is GuardedBird {
    return animal.type === "bird";
}

function handleGuardedAnimal(animal: GuardedAnimal): void {
    if (isGuardedBird(animal)) {
        animal.fly();
    } else {
        animal.swim();
    }
}

// Example 5: Discriminated Unions
interface GuardedCircle {
    kind: "circle";
    radius: number;
}

interface GuardedRectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type GuardedShape = GuardedCircle | GuardedRectangle;

function calculateGuardedArea(shape: GuardedShape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}

// Example 6: Type Predicates
interface GuardedCat {
    name: string;
    purr(): void;
}

interface GuardedDog {
    name: string;
    bark(): void;
}

function isGuardedCat(pet: GuardedCat | GuardedDog): pet is GuardedCat {
    return "purr" in pet;
}

// Example 7: Assertion Functions
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Value must be a string");
    }
}

// Example 8: Type Narrowing with Nullish Values
function processGuardedString(value: string | null | undefined): string {
    if (value == null) {
        return "default";
    }
    return value.toUpperCase();
}

// Running examples
export function runTypeGuardExamples(): void {
    console.log("\nType Guard Examples:");

    // Example 1: typeof Type Guard
    console.log(processGuardedValue("hello"));  // HELLO
    console.log(processGuardedValue(42));       // "42"

    // Example 2: instanceof Type Guard
    try {
        throw new GuardedError(404, "Not Found");
    } catch (error) {
        handleGuardedError(error);
    }

    // Example 3: in Operator Type Guard
    const user: GuardedUser = { name: "John", email: "john@example.com" };
    const admin: GuardedAdmin = { name: "Admin", role: "superuser" };
    processEntity(user);
    processEntity(admin);

    // Example 4: Custom Type Guards
    const bird: GuardedBird = {
        type: "bird",
        fly() { console.log("Flying..."); }
    };

    const fish: GuardedFish = {
        type: "fish",
        swim() { console.log("Swimming..."); }
    };

    handleGuardedAnimal(bird);
    handleGuardedAnimal(fish);

    // Example 5: Discriminated Unions
    const circle: GuardedCircle = { kind: "circle", radius: 5 };
    const rectangle: GuardedRectangle = { kind: "rectangle", width: 4, height: 6 };

    console.log("Circle area:", calculateGuardedArea(circle));
    console.log("Rectangle area:", calculateGuardedArea(rectangle));

    // Example 6: Type Predicates
    const cat: GuardedCat = {
        name: "Whiskers",
        purr() { console.log("Purring..."); }
    };

    const dog: GuardedDog = {
        name: "Rex",
        bark() { console.log("Barking..."); }
    };

    const pets = [cat, dog];
    pets.forEach(pet => {
        if (isGuardedCat(pet)) {
            pet.purr();
        } else {
            pet.bark();
        }
    });

    // Example 7: Assertion Functions
    try {
        const value = "test";
        assertIsString(value);
        console.log(value.toUpperCase());
    } catch (error) {
        console.error(error);
    }

    // Example 8: Type Narrowing with Nullish Values
    console.log(processGuardedString("hello"));     // HELLO
    console.log(processGuardedString(null));        // default
    console.log(processGuardedString(undefined));   // default
}

runTypeGuardExamples(); 