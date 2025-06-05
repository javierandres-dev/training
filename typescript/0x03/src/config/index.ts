// Configuration types and defaults
export interface Config {
    database: DatabaseConfig;
    api: APIConfig;
}

export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

export interface APIConfig {
    baseUrl: string;
    timeout: number;
    version: string;
}

// Default configuration
export const defaultConfig: Config = {
    database: {
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'password'
    },
    api: {
        baseUrl: 'http://api.example.com',
        timeout: 5000,
        version: '1.0.0'
    }
}; 