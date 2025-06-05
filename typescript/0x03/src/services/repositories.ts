// Repository pattern implementation
export interface Repository<T> {
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<boolean>;
    find(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
}

export interface UserEntity {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserRepository implements Repository<UserEntity> {
    private users: Map<string, UserEntity> = new Map();

    async create(user: UserEntity): Promise<UserEntity> {
        this.users.set(user.id, user);
        return user;
    }

    async update(id: string, user: UserEntity): Promise<UserEntity> {
        if (!this.users.has(id)) {
            throw new Error('User not found');
        }
        this.users.set(id, user);
        return user;
    }

    async delete(id: string): Promise<boolean> {
        return this.users.delete(id);
    }

    async find(id: string): Promise<UserEntity | null> {
        return this.users.get(id) || null;
    }

    async findAll(): Promise<UserEntity[]> {
        return Array.from(this.users.values());
    }
} 