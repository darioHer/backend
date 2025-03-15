import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';

import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { UsuarioEntity } from '../entities/usuario/usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    // ✅ Obtener todos los usuarios
    @Get()
    async getAllUsuarios(): Promise<UsuarioEntity[]> {
        return this.usuarioService.getAllUsuarios();
    }

    // ✅ Obtener usuario por ID (con ParseIntPipe)
    @Get(':id')
    async getUsuarioById(@Param('id', ParseIntPipe) id: number): Promise<UsuarioEntity> {
        return this.usuarioService.getUsuarioById(id);
    }

    // ✅ Crear un nuevo usuario
    @Post()
    async createUsuario(@Body() dto: CreateUsuarioDto): Promise<UsuarioEntity> {
        return this.usuarioService.createUsuario(dto);
    }

    // ✅ Actualizar usuario por ID (con ParseIntPipe)
    @Put(':id')
    async updateUsuario(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUsuarioDto): Promise<UsuarioEntity> {
        return this.usuarioService.updateUsuario(id, dto);
    }

    // ✅ Eliminar usuario y devolver mensaje de confirmación
    @Delete(':id')
    async deleteUsuario(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
        const message = await this.usuarioService.deleteUsuario(id);
        return { message };
    }
}
