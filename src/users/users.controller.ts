// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-D  ·  Implement UsersController
// ─────────────────────────────────────────────────────────────────────────────
// Wire up ALL 5 endpoints under the '/users' path.
// Use ParseIntPipe for the :id param in every route that needs it.
//
//   GET    /users
//   GET    /users/:id
//   POST   /users          (201)
//   PATCH  /users/:id
//   DELETE /users/:id
// ─────────────────────────────────────────────────────────────────────────────

import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
// TODO: import all decorators and pipes you need
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// TODO: import your DTOs

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

@Get()
findAll(){
  return this.usersService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id:number) {
  //el @Param es para mapear el valor del id que viene en la URL, y el
  //  ParseIntPipe es para convertir ese valor a un número, ya que por defecto los parámetros de la URL son strings. Entonces, al usar ParseIntPipe, el valor del id se convierte a un número antes de ser pasado a la función findOne.
  return this.usersService.findOne(id);
}

@Post()
@HttpCode(HttpStatus.CREATED)
//el httpCode es para indicar que el status de la respuesta debe ser 201 (Created) en lugar del 200 (OK) por defecto, ya que estamos creando un nuevo recurso (usuario) con esta ruta.
create(createUserDto: CreateUserDto) {
  return this.usersService.create(createUserDto);
}

@Patch(':id')
//el patch es para actualizar un recurso existente
update(id: number, updateUserDto: UpdateUserDto) {
  //el usersService tiene un método update que recibe el id del usuario a actualizar y el DTO con los datos a actualizar, y devuelve el usuario actualizado. 
  //el usersService es un objeto que se inyecta en el constructor de la clase UsersController, y se puede usar para llamar a sus métodos desde las rutas del controlador.
  return this.usersService.update(id, updateUserDto)
}

@Delete(':id')
remove(id: number) {
  return this.usersService.remove(id)
}


  // TODO: implement the 5 route handlers
}
