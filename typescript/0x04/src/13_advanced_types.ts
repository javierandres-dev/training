/**
 * TypeScript Advanced Types Examples
 * -------------------------------
 * This module demonstrates advanced type features in TypeScript.
 */

// 1. Mapped Types
// ------------

interface Product {
    id: number;
    name: string;
    price: number;
}

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

type Immutable<T> = {
    readonly [P in keyof T]: T[P];
};

type OptionalProduct = Partial<Product>;
type NullableProduct = { [P in keyof Product]: Product[P] | null };

// 2. Conditional Types
// -----------------

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type FirstArgumentOf<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;
type IsArray<T> = T extends Array<any> ? true : false;

function getString(value: string): string {
    return value.toUpperCase();
}

function getNumber(value: number): number {
    return value * 2;
}

type StringReturn = ReturnTypeOf<typeof getString>;  // string
type NumberReturn = ReturnTypeOf<typeof getNumber>; // number
type FirstArg = FirstArgumentOf<typeof getNumber>;  // number
type IsNumberArray = IsArray<number[]>;  // true
type IsStringArray = IsArray<string>;    // false

// 3. Literal Types
// ------------

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type StatusCode = 200 | 404 | 500;

interface AppConfig {
    theme: "light" | "dark";
    language: "en" | "es" | "fr";
    notifications: boolean;
}

function makeRequest(method: HTTPMethod, path: string): void {
    console.log(`Making ${method} request to ${path}`);
}

function handleResponse(statusCode: StatusCode): void {
    switch (statusCode) {
        case 200:
            console.log("Success");
            break;
        case 404:
            console.log("Not Found");
            break;
        case 500:
            console.log("Server Error");
            break;
    }
}

// 4. Template Literal Types
// ---------------------

type CSSProperty = "margin" | "padding" | "border";
type Direction = "top" | "right" | "bottom" | "left";
type CSSPropertyWithDirection = `${CSSProperty}-${Direction}`;

type EventType = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventType>}`;

type HTTPVerb = "get" | "post" | "put" | "delete";
type APIRoute = `${HTTPVerb}:/users`;

function validateCSSProperty(prop: CSSPropertyWithDirection, value: string): void {
    console.log(`Validating ${prop} with value ${value}`);
}

// 5. Recursive Types
// --------------

type JSONValue = 
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

interface FileSystemNode {
    name: string;
    size: number;
    children?: FileSystemNode[];
}

interface CommentThread {
    id: number;
    text: string;
    replies?: CommentThread[];
}

function calculateTotalSize(node: FileSystemNode): number {
    let total = node.size;
    if (node.children) {
        total += node.children.reduce((sum, child) => sum + calculateTotalSize(child), 0);
    }
    return total;
}

function countComments(thread: CommentThread): number {
    let count = 1;
    if (thread.replies) {
        count += thread.replies.reduce((sum, reply) => sum + countComments(reply), 0);
    }
    return count;
}

// Running examples
export function runAdvancedTypeExamples(): void {
    console.log("\nAdvanced Types Examples:");

    // 1. Mapped Types
    const product: Product = {
        id: 1,
        name: "Example Product",
        price: 29.99
    };

    const optionalProduct: OptionalProduct = {
        name: "Optional Product"
    };

    const nullableProduct: NullableProduct = {
        id: 1,
        name: null,
        price: 19.99
    };

    console.log("Product:", product);
    console.log("Optional Product:", optionalProduct);
    console.log("Nullable Product:", nullableProduct);

    // 2. Conditional Types
    console.log("\nConditional Types:");
    console.log("String function result:", getString("hello"));
    console.log("Number function result:", getNumber(5));

    // 3. Literal Types
    console.log("\nLiteral Types:");
    makeRequest("GET", "/api/users");
    handleResponse(200);

    // 4. Template Literal Types
    console.log("\nTemplate Literal Types:");
    validateCSSProperty("margin-top", "10px");
    validateCSSProperty("padding-left", "20px");

    // 5. Recursive Types
    console.log("\nRecursive Types:");
    const fileSystem: FileSystemNode = {
        name: "root",
        size: 100,
        children: [
            { name: "folder1", size: 50 },
            { name: "folder2", size: 30, children: [{ name: "file1", size: 10 }] }
        ]
    };

    const commentThread: CommentThread = {
        id: 1,
        text: "Parent comment",
        replies: [
            { id: 2, text: "Reply 1" },
            { id: 3, text: "Reply 2", replies: [{ id: 4, text: "Nested reply" }] }
        ]
    };

    console.log("Total file system size:", calculateTotalSize(fileSystem));
    console.log("Total comments:", countComments(commentThread));
}

runAdvancedTypeExamples();

/*
npm run build
node dist/12_advanced_types.ts
*/ 