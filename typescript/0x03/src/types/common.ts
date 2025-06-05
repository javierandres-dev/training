// Basic interfaces
export interface Person {
    id: string;
    name: string;
    age: number;
}

export interface Vehicle {
    brand: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

export interface VehicleWithPrice extends Vehicle {
    price: number;
}

// Generic interfaces
export interface Box<T> {
    getValue(): T;
}

// Validation interfaces
export interface StringValidator {
    isValid(s: string): boolean;
}

// Service interfaces
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Role {
    id: string;
    name: string;
    permissions: string[];
} 