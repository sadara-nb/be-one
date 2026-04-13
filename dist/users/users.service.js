"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Brina', email: 'brina@hotmail.com', age: 20, role: 'student' },
            { id: 2, name: 'Santiaguito', email: 'santiaguito_pirobita@hotmail.com', age: 21, role: 'student' }
        ];
        this.nextId = 3;
    }
    update(id, updateUserDto) {
        throw new Error('Method not implemented.');
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((u) => u.id == id);
        if (!user)
            throw new common_1.NotFoundException('User #${id} not found');
        return user;
    }
    create(dto) {
        const user = {
            id: this.nextId++,
            name: dto.name,
            email: dto.email,
            age: dto.age,
            role: dto.role
        };
        this.users.push(user);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map