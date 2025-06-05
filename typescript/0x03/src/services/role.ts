// Role service and types
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
        return [...this.roles];
    }
} 