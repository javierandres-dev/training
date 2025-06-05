// =================================================================
// Advanced Types in TypeScript
// =================================================================

// -----------------------------
// 1. Utility Types
// -----------------------------

// Original interfaces
interface ProductData {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}

interface UserData {
    id: string;
    name: string;
    email: string;
    preferences: {
        theme: "light" | "dark";
        notifications: boolean;
    };
    age: number;
    isAdmin: boolean;
}

// Partial - Make all properties optional
type PartialProduct = Partial<ProductData>;

// Required - Make all properties required
type RequiredUser = Required<UserData>;

// Readonly - Make all properties readonly
type ReadonlyProduct = Readonly<ProductData>;

// Record - Create a type with specified keys and value type
type CategoryProducts = Record<string, ProductData[]>;

// Pick - Select specific properties
type ProductSummary = Pick<ProductData, "id" | "name" | "price">;

// Omit - Remove specific properties
type ProductDetails = Omit<ProductData, "id" | "category">;

// Extract - Extract types that are assignable to a type
type ThemeType = Extract<"light" | "dark" | "system", UserData["preferences"]["theme"]>;

// Exclude - Remove types that are assignable to a type
type ExtendedTheme = Exclude<"light" | "dark" | "system", UserData["preferences"]["theme"]>;

console.log('\n1. Utility Types:', {
    partialProduct: {
        name: "Sample Product",
        price: 99.99
    } as PartialProduct,
    productSummary: {
        id: 1,
        name: "Sample Product",
        price: 99.99
    } as ProductSummary
});

// -----------------------------
// 2. Mapped Types
// -----------------------------

// Make all properties nullable
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// Make all properties arrays
type ArrayType<T> = {
    [P in keyof T]: T[P][];
};

// Add prefix to property names
type Prefixed<T, P extends string> = {
    [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
};

// Example usage
type NullableProduct = Nullable<ProductData>;
type ArrayProduct = ArrayType<ProductData>;
type PrefixedUser = Prefixed<UserData, "user">;

const nullableProduct: NullableProduct = {
    id: 1,
    name: null,
    price: 99.99,
    description: null,
    category: "electronics"
};

console.log('\n2. Mapped Types:', {
    nullableProduct
});

// -----------------------------
// 3. Conditional Types
// -----------------------------

// Type based on condition
type IsString<T> = T extends string ? true : false;
type IsStringType = IsString<"hello">; // true
type IsNumberType = IsString<42>; // false

// Infer return type
type InferReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function createUser(name: string, age: number): UserData {
    return {
        id: Math.random().toString(),
        name,
        email: `${name}@example.com`,
        preferences: {
            theme: "light",
            notifications: true
        },
        age,
        isAdmin: false
    };
}

type CreateUserReturn = InferReturnType<typeof createUser>;

console.log('\n3. Conditional Types:', {
    isString: <IsStringType>true,
    isNumber: <IsNumberType>false
});

// -----------------------------
// 4. Template Literal Types
// -----------------------------

// Basic template literal
type DOMEventName<T extends string> = `${T}Changed`;
type MouseEventName = DOMEventName<"click" | "mousedown" | "mouseup">;

// Complex template literal
type CSSProperty<T extends string, U extends string> = `${T}-${U}`;
type MarginProperty = CSSProperty<"margin", "top" | "right" | "bottom" | "left">;

// Template with number
type GridArea<R extends number, C extends number> = `grid-area-${R}-${C}`;
type Grid3x3 = GridArea<1 | 2 | 3, 1 | 2 | 3>;

const mouseEvent: MouseEventName = "clickChanged";
const marginProp: MarginProperty = "margin-top";
const gridArea: Grid3x3 = "grid-area-1-2";

console.log('\n4. Template Literal Types:', {
    mouseEvent,
    marginProp,
    gridArea
});

// -----------------------------
// 5. Recursive Types
// -----------------------------

// Recursive type for nested arrays
type NestedArray<T> = Array<T | NestedArray<T>>;

// Recursive type for tree structure
type TreeNode<T> = {
    value: T;
    children?: TreeNode<T>[];
};

// Example usage
const numbers: NestedArray<number> = [1, [2, 3, [4, 5]], 6];

const tree: TreeNode<string> = {
    value: "root",
    children: [
        {
            value: "child1",
            children: [{ value: "grandchild1" }]
        },
        {
            value: "child2"
        }
    ]
};

console.log('\n5. Recursive Types:', {
    nestedArray: numbers,
    treeStructure: tree
});

// -----------------------------
// 6. Indexed Access Types
// -----------------------------

// Accessing nested types
type UserPreferences = UserData["preferences"];
type UserTheme = UserData["preferences"]["theme"];

// Array element type
type StringArray = string[];
type StringArrayElement = StringArray[number];

// Tuple element type
type Tuple = [string, number, boolean];
type TupleElement1 = Tuple[1]; // number

const userPrefs: UserPreferences = {
    theme: "dark",
    notifications: true
};

console.log('\n6. Indexed Access Types:', {
    userPreferences: userPrefs
});

// -----------------------------
// 7. keyof Operator
// -----------------------------

// Basic keyof
type ProductDataKeys = keyof ProductData;

// keyof with generics
function getObjectValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Mapped type with keyof
type OptionalProps<T> = {
    [K in keyof T]?: T[K];
};

const productData: ProductData = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "Powerful laptop",
    category: "Electronics"
};

console.log('\n7. keyof Operator:', {
    productName: getObjectValue(productData, "name"),
    productPrice: getObjectValue(productData, "price")
});

// -----------------------------
// 8. typeof Operator
// -----------------------------

// typeof with variables
const position2D = { x: 10, y: 20 };
type Position2D = typeof position2D;

// typeof with functions
function multiplyNumbers(a: number, b: number) {
    return a * b;
}
type MultiplyFunction = typeof multiplyNumbers;

// typeof with enum
enum CardinalDirection {
    North,
    South,
    East,
    West
}
type DirectionType = typeof CardinalDirection;

const newPosition: Position2D = { x: 30, y: 40 };
const multiplyFunc: MultiplyFunction = (a, b) => a * b;

console.log('\n8. typeof Operator:', {
    position: newPosition,
    multiplication: multiplyFunc(5, 3)
}); 