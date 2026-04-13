import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export type UserRoles = 'student' | 'teacher' | 'admin';
export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    role: string;
}
export declare class UsersService {
    update(id: number, updateUserDto: UpdateUserDto): void;
    remove(id: number): void;
    private users;
    private nextId;
    findAll(): User[];
    findOne(id: number): User;
    create(dto: CreateUserDto): User;
}
