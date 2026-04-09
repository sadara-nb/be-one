declare const UserRole: readonly ["student", "teacher", "admin"];
type UserRole = (typeof UserRole)[number];
export declare class UpdateUser {
    name: string;
    email: string;
    age: number;
    role?: UserRole;
}
export {};
