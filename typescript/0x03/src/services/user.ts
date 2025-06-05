// User service and types
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
        return [...this.users];
    }
} 