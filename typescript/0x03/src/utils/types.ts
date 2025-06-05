// Common utility types
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type ValidationResult<T> = {
    isValid: boolean;
    errors?: string[];
    data?: T;
};

export type Nullable<T> = T | null;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type AsyncResult<T> = Promise<{
    success: boolean;
    data?: T;
    error?: string;
}>;

export interface Pagination {
    page: number;
    limit: number;
    total: number;
}

export interface PaginatedResult<T> {
    items: T[];
    pagination: Pagination;
}

export type SortDirection = 'asc' | 'desc';

export interface SortOptions {
    field: string;
    direction: SortDirection;
}

export type FilterOperator = 
    | 'eq'    // equals
    | 'neq'   // not equals
    | 'gt'    // greater than
    | 'gte'   // greater than or equal
    | 'lt'    // less than
    | 'lte'   // less than or equal
    | 'in'    // in array
    | 'nin'   // not in array
    | 'like'  // string contains
    | 'nlike' // string does not contain
    | 'null'  // is null
    | 'nnull'; // is not null

export interface FilterCondition {
    field: string;
    operator: FilterOperator;
    value: any;
}

export interface QueryOptions {
    pagination?: Pagination;
    sort?: SortOptions[];
    filters?: FilterCondition[];
}

// Type guards
export function isNullOrUndefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null;
}

export function isArray<T>(value: unknown): value is Array<T> {
    return Array.isArray(value);
}

// Utility functions
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
}

export function deepClone<T>(obj: T): T {
    if (!isObject(obj)) {
        return obj;
    }
    if (isArray(obj)) {
        return obj.map(item => deepClone(item)) as unknown as T;
    }
    const result = {} as T;
    Object.keys(obj as object).forEach(key => {
        result[key as keyof T] = deepClone((obj as any)[key]);
    });
    return result;
} 