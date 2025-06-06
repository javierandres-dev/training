/**
 * TypeScript Utility Types
 * --------------------
 * This file demonstrates built-in utility types:
 * 1. Partial<T>
 * 2. Pick<T, K>
 * 3. Omit<T, K>
 * 4. Readonly<T>
 * 5. Record<K, T>
 * 6. Exclude<T, U>
 * 7. Extract<T, U>
 * 8. Awaited<T>
 * 9. Parameters<T>
 * 10. NonNullable<T>
 * 11. ReturnType<T>
 * 12. InstanceType<T>
 */

/**
 * TypeScript Utility Types Examples
 * -------------------------------
 * This module demonstrates various utility types in TypeScript.
 */

// Base interfaces for examples
interface User {
    id: number;
    name: string;
    email?: string;
    age: number;
    address: {
        street: string;
        city: string;
        country: string;
    };
    greet: () => string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
    tags: string[];
    published: boolean;
}

// 1. Partial<T>
// -----------
// Makes all properties optional

// Update function using Partial
function updateUser(userId: number, updates: Partial<User>): void {
    console.log(`Updating user ${userId} with:`, updates);
}

// Example usage
const userUpdates: Partial<User> = {
    email: "new.email@example.com",
    age: 31
};

// 2. Pick<T, K>
// -----------
// Creates a type with only the specified properties

// User credentials type
type UserCredentials = Pick<User, "email" | "id">;

// Post preview type
type PostPreview = Pick<Post, "id" | "title" | "published">;

// Example usage
const userCreds: UserCredentials = {
    id: 1,
    email: "user@example.com"
};

// 3. Omit<T, K>
// -----------
// Creates a type without the specified properties

// Public user info (omitting sensitive data)
type PublicUser = Omit<User, "email" | "address">;

// Post without metadata
type PostContent = Omit<Post, "id" | "authorId" | "published">;

// Example usage
const publicUser: PublicUser = {
    id: 1,
    name: "John Doe",
    age: 30,
    greet: () => "Hello!"
};

// 4. Readonly<T>
// ------------
// Makes all properties readonly

// Immutable user type
type ImmutableUser = Readonly<User>;

// Immutable array type
type ReadonlyTags = Readonly<string[]>;

// Example usage
const immutableUser: ImmutableUser = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    age: 28,
    address: {
        street: "123 Main St",
        city: "Boston",
        country: "USA"
    },
    greet: () => "Hello!"
};

// This would cause an error:
// immutableUser.name = "New Name";

// 5. Record<K, T>
// ------------
// Creates an object type with specified keys and value type

// User database
type UserDatabase = Record<number, User>;

// Post tags with counts
type TagCounts = Record<string, number>;

// Example usage
const userDb: UserDatabase = {
    1: {
        id: 1,
        name: "John",
        email: "john@example.com",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Boston",
            country: "USA"
        },
        greet: () => "Hello!"
    }
};

// 6. Exclude<T, U>
// -------------
// Excludes types from T that are assignable to U

// Status types
type StatusType = "pending" | "active" | "completed" | "failed" | "cancelled";
type PositiveStatus = Exclude<StatusType, "failed" | "cancelled">;

// Example usage
function updateStatus(status: PositiveStatus) {
    console.log(`Status updated to: ${status}`);
}

// 7. Extract<T, U>
// -------------
// Extracts types from T that are assignable to U

type ErrorStatus = Extract<StatusType, "failed" | "cancelled">;

function handleError(status: ErrorStatus) {
    console.log(`Handling error status: ${status}`);
}

// 8. Awaited<T>
// -----------
// Unwraps Promise types

async function fetchUserById(id: number): Promise<User> {
    // Simulated API call
    return {
        id,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Boston",
            country: "USA"
        },
        greet: () => "Hello!"
    };
}

type FetchedUser = Awaited<ReturnType<typeof fetchUserById>>;

// 9. Parameters<T>
// -------------
// Extracts parameter types from function type

// Function type
type UserValidator = (user: User, strict?: boolean) => boolean;

// Extract parameter types
type ValidatorParams = Parameters<UserValidator>;

// Example usage
const validateUser: UserValidator = (user, strict = false) => {
    if (strict) {
        return user.email !== undefined && user.email.includes("@") && user.age >= 18;
    }
    return user.email !== undefined && user.email.includes("@");
};

// 10. NonNullable<T>
// ---------------
// Removes null and undefined from type T

type OptionalString = string | null | undefined;
type RequiredString = NonNullable<OptionalString>;

function processString(value: RequiredString) {
    console.log(`Processing: ${value.toUpperCase()}`);
}

// 11. ReturnType<T>
// --------------
// Extracts return type from function type

// Complex function
function createUserResponse(user: User, includePrivate: boolean) {
    if (includePrivate) {
        return { success: true, user };
    }
    const { email, ...publicInfo } = user;
    return { success: true, user: publicInfo };
}

type UserResponse = ReturnType<typeof createUserResponse>;

// 12. InstanceType<T>
// ----------------
// Extracts instance type from constructor type

class UserManager {
    private users: User[] = [];

    addUser(user: User) {
        this.users.push(user);
    }

    getUser(id: number) {
        return this.users.find(user => user.id === id);
    }
}

type UserManagerInstance = InstanceType<typeof UserManager>;

// Running examples
export function runUtilityTypeExamples(): void {
    console.log("\nUtility Types Examples:");

    console.log("\n1. Partial<T>:");
    updateUser(1, userUpdates);

    console.log("\n2. Pick<T, K>:");
    console.log("User Credentials:", userCreds);

    console.log("\n3. Omit<T, K>:");
    console.log("Public User:", publicUser);

    console.log("\n4. Readonly<T>:");
    console.log("Immutable User:", immutableUser);

    console.log("\n5. Record<K, T>:");
    console.log("User Database:", userDb);

    console.log("\n6. Exclude<T, U>:");
    updateStatus("pending");
    // This would error: updateStatus("failed");

    console.log("\n7. Extract<T, U>:");
    handleError("failed");
    // This would error: handleError("active");

    console.log("\n8. Awaited<T>:");
    fetchUserById(1).then(user => {
        const fetchedUser: FetchedUser = user;
        console.log("Fetched User:", fetchedUser);
    });

    console.log("\n9. Parameters<T>:");
    const params: ValidatorParams = [immutableUser, true];
    console.log("Validator Result:", validateUser(...params));

    console.log("\n10. NonNullable<T>:");
    processString("hello");
    // This would error: processString(null);

    console.log("\n11. ReturnType<T>:");
    const response: UserResponse = createUserResponse(immutableUser, false);
    console.log("User Response:", response);

    console.log("\n12. InstanceType<T>:");
    const manager: UserManagerInstance = new UserManager();
    manager.addUser(immutableUser);
    console.log("Found User:", manager.getUser(1));
}

runUtilityTypeExamples();

/*
npm run build
node dist/11_utility_types.ts
*/ 