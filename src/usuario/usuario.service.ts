import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { RolEntity } from '../entities/rol/rol.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
        
        @InjectRepository(RolEntity)
        private readonly rolRepository: Repository<RolEntity>,
    ) {}

    // ✅ Obtener todos los usuarios con su rol
    async getAllUsuarios(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ relations: ['rol'] });
    }

    // ✅ Obtener un usuario por ID
    async getUsuarioById(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { id }, relations: ['rol'] });
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }

    // ✅ Crear un nuevo usuario
    async createUsuario(dto: CreateUsuarioDto): Promise<UsuarioEntity> {
        const rol = await this.rolRepository.findOne({ where: { id: dto.rolId } });

        if (!rol) {
            throw new BadRequestException('Rol no encontrado');
        }

        const usuario = this.usuarioRepository.create({ ...dto, rol });
        return await this.usuarioRepository.save(usuario);
    }

    // ✅ Actualizar un usuario existente
    async updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne({ where: { id } });

        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        Object.assign(usuario, dto);
        return await this.usuarioRepository.save(usuario);
    }

    // ✅ Eliminar un usuario después de verificar si existe
    async deleteUsuario(id: number): Promise<string> {
        const usuario = await this.usuarioRepository.findOne({ where: { id } });

        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        await this.usuarioRepository.remove(usuario);
        return `Usuario con ID ${id} eliminado correctamente`;
    }
}
