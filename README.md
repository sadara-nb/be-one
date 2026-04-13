Sabrina Noguera. 
202310720.

Q1-
El método findAll() sí tiene decorador @Get(), por lo que ese funcionaría. Sin embargo, los métodos update y remove no tienen, por lo que se
ignoran ya que, sin el decorador, no se registran como rutas. 
Se tendrían, entonces, que agregar @Delete y @Patch

Q2-
° transform: true en ValidationPipe convierte el body del request a instancias de DTO. 
° ParseIntPipe opera sobre los parámetros de URL que llegan como strings

Q3-
Con solo whitelist: true y sin forbiden funciona, pero el cliente recibe un 201 y asume que password fue procesado.
No obstante, se podría tener un bug. forbidNonWhitelisted fuerza al cliente a mandar solo lo esperado, haciendo la API más predecible y segura.

Q4-
Sí, se modifican los datos del servicio. Los objetos en el array this.products son referencias y, el findAll() retorna el array directamente, 
siendo cada elemento la misma referencia del objeto en memoria. 

Q5-
El primer request falla con 400. El adornador IsOptional() no desactiva las otras validaciones cuando el campo está presente.
Solo es si está ausente o es undifined, no lo valides. 
Para el segundo request, el campo price está ausente y el decorador IsOptional() le dice al class-validator que lo omita completamente.
Entonces, el IsOptional funciona de tal forma, que si el valor es null o undefined, salta las demás validaciones de este campo.

Q6-
Con nextId elimina task #1, crea una nueva task y retorna el id.

Q7-
El start del server arranca normalmente, el nestjs no crashea y los otros modulos no funcionan bien.
El post/users da una respuesta 404, donde le nestJS nunca registra las rutas del controller porque el módulo nunca fue importado.
eL error se manifiesta cuando intentas usar las rutas. 

Q8-
Por defecto, el Post() en NestJS retorna 200 OK, sin embargo, depende del cliente. 
HTTP distingue entre respuesta 200 y 201 que, este último, da el created. Los clientes validan el status code estrictamente podrían interpretar 
el 200 como error.

Q9-
Para una versión con null, se podría implementar de esta forma:
// service
findOne(id: number): User | null {
  return this.users.find((u) => u.id === id) ?? null;
}

// controller
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  const user = this.usersService.findOne(id);
  if (!user) throw new NotFoundException(`User #${id} not found`);
  return user;
}

son el null, se lanza excepción en el servicio es mejor para evitar errores en grandes números de datos. findOne es llamado desde update y remove 
y si retorna null, cada llamado tiene que manejar ese null. Sin embargo, con la excepción en el servicio, el manejo está centralizado en un solo 
lugar, y los llamados no necesitan saber qué hacer si no encuentra el recurso.  
