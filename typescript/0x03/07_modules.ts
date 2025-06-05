// =================================================================
// Modules in TypeScript
// =================================================================

// -----------------------------
// 1. ES6 Modules
// -----------------------------

// Named exports
export interface User {
    id: string;
    name: string;
    email: string;
}

export class UserService {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUser(id: string): User | undefined {
        return this.users.find(u => u.id === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}

// Default export
export default class AuthService {
    login(email: string, password: string): boolean {
        // Simulated authentication
        return email.includes("@") && password.length >= 6;
    }
}

// Export constant
export const API_VERSION = "1.0.0";

// Export type
export type UserRole = "admin" | "user" | "guest";

// -----------------------------
// 2. CommonJS Modules
// -----------------------------

// Example of CommonJS style exports (though using ES6 syntax)
export class Database {
    private static instance: Database;
    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect(): void {
        console.log("Database connected");
    }
}

// -----------------------------
// 3. Module Resolution
// -----------------------------

// Path mapping example (configured in tsconfig.json)
import { Logger } from "@utils/logger";
import { Config } from "@config";

// Relative imports
import { UserService as UserServiceBase } from "./services/user";
import { RoleService } from "./services/role";

// -----------------------------
// 4. Namespaces
// -----------------------------

// Namespace declaration
export namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    export class EmailValidator implements StringValidator {
        isValid(s: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isValid(s: string): boolean {
            const zipRegex = /^\d{5}(-\d{4})?$/;
            return zipRegex.test(s);
        }
    }
}

// -----------------------------
// 5. Ambient Modules
// -----------------------------

// Declare module for external library (typically in .d.ts file)
declare module "external-lib" {
    export interface Options {
        timeout: number;
        retries: number;
    }

    export function initialize(options: Options): void;
    export function request(url: string): Promise<any>;
}

// -----------------------------
// 6. Module Augmentation
// -----------------------------

// Augment existing module
declare module "./services/user" {
    interface User {
        lastLogin?: Date;
    }

    interface UserService {
        getUserLastLogin(id: string): Date | undefined;
    }
}

// -----------------------------
// 7. Triple-Slash Directives
// -----------------------------

/// <reference path="./types/global.d.ts" />
/// <reference types="node" />

// -----------------------------
// 8. Path Mapping
// -----------------------------

/*
Example tsconfig.json path mapping:
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@utils/*": ["src/utils/*"],
            "@config": ["src/config/index.ts"],
            "@services/*": ["src/services/*"]
        }
    }
}
*/

// Usage example
import { LogLevel } from "@utils/types";
import { DatabaseConfig } from "@config";
import { UserRepository } from "@services/repositories";

// Example implementation
class AppLogger implements Logger {
    log(level: LogLevel, message: string): void {
        console.log(`[${level}] ${message}`);
    }
}

// Example usage of imports
const logger = new AppLogger();
const userService = new UserServiceBase();
const db = Database.getInstance();
const auth = new AuthService();

// Validation namespace usage
const emailValidator = new Validation.EmailValidator();
const zipValidator = new Validation.ZipCodeValidator();

// Module with namespace
export namespace Auth {
    export interface Role {
        id: string;
        name: string;
        permissions: string[];
    }

    export class RoleService {
        private roles: Role[] = [];

        addRole(role: Role): void {
            this.roles.push(role);
        }

        getRole(id: string): Role | undefined {
            return this.roles.find(r => r.id === id);
        }

        getAllRoles(): Role[] {
            return this.roles;
        }
    }
}

// Usage example
const roleService = new Auth.RoleService();

const user: User = {
    id: "1",
    name: "John Doe",
    email: "john@example.com"
};

const role: Auth.Role = {
    id: "1",
    name: "admin",
    permissions: ["read", "write", "delete"]
};

userService.addUser(user);
roleService.addRole(role);

console.log('\n1. Module Examples:', {
    user: userService.getUser("1"),
    role: roleService.getRole("1"),
    allUsers: userService.getAllUsers(),
    allRoles: roleService.getAllRoles()
});

// Namespace example
export namespace Validation {
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    export class EmailValidator implements StringValidator {
        isValid(s: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isValid(s: string): boolean {
            const zipRegex = /^\d{5}(-\d{4})?$/;
            return zipRegex.test(s);
        }
    }
}

// Use namespace
const emailValidatorInstance = new Validation.EmailValidator();
const zipValidatorInstance = new Validation.ZipCodeValidator();

console.log('\n2. Namespace Examples:', {
    validEmail: emailValidatorInstance.isValid("test@example.com"),
    invalidEmail: emailValidatorInstance.isValid("invalid-email"),
    validZip: zipValidatorInstance.isValid("12345"),
    invalidZip: zipValidatorInstance.isValid("1234")
});

// Module augmentation example
declare module "logger" {
    export interface Logger {
        debug(message: string): void;
    }
}

export {
    logger,
    userService,
    db,
    auth,
    emailValidator,
    zipValidator,
    roleService
}; 