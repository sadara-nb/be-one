// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-C  ·  Implement UsersService
// ─────────────────────────────────────────────────────────────────────────────
// Create an in-memory service following the same pattern as ProductsService.
//
// Requirements:
//   - Store users in a private array
//   - Pre-populate with at least 2 seed users
//   - Implement: findAll, findOne(id), create(dto), update(id, dto), remove(id)
//   - findOne must throw NotFoundException when user is not found
//
// Interface to use:
//   export interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     role: string;
//   }
// ─────────────────────────────────────────────────────────────────────────────

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// TODO: import NotFoundException and your DTOs

export type UserRoles = 'student' | 'teacher' | 'admin';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}


@Injectable()
export class UsersService {
  update(id: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  remove(id: number) {
    throw new Error('Method not implemented.');
  }
  // TODO: implement the service

  //creamos el arreglo de los usuarios
  private users: User[] = [
    {id: 1, name: 'Brina', email: 'brina@hotmail.com', age: 20, role: 'student'},
    {id: 2, name: 'Santiaguito', email: 'santiaguito_pirobita@hotmail.com', age: 21, role: 'student'}
  ];
  private nextId = 3; //variable para asignar el id a los nuevos usuarios, se incrementa cada vez que se crea un nuevo usuario

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id == id);  //qué es u? u es cada elemento del arreglo users, es decir cada usuario. Entonces, find busca el usuario cuyo id sea igual al id que se le pasó como argumento a la función findOne
    //qué diferencia hay entre u y user //u es una variable temporal que representa cada elemento del arreglo users mientras se itera sobre él, mientras que user es la variable que almacena el resultado de la búsqueda, es decir, el usuario encontrado o undefined si no se encuentra ningún usuario con el id especificado.
    if (!user) throw new NotFoundException('User #${id} not found');
    return user;
  }
  
  create(dto: CreateUserDto): User {
    const user: User = {
      id: this.nextId++,
      name: dto.name,
      email: dto.email,
      age: dto.age,
      role: dto.role
    };
    this.users.push(user);
    return user;
  }
}
