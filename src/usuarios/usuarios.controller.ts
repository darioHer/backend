import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}  // ✅ INYECTADO AQUÍ

  @Get()
  obtenerTodos() {
    return this.usuarioService.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id') id: number) {
    return this.usuarioService.obtenerPorId(id);
  }

  @Post()
  crear(@Body() data: any) {
    return this.usuarioService.crear(data);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() data: any) {
    return this.usuarioService.actualizar(id, data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.usuarioService.eliminar(id);
  }
}
