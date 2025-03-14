import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuarios/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    ) {}

    obtenerTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
}

    async obtenerPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
}

async crear(data: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(data);
    return this.usuarioRepository.save(nuevoUsuario); // Guardar directamente los datos en la BD
}


  async actualizar(id: number, data: any): Promise<Usuario> { // Se reemplaza el DTO con `any`
    const usuario = await this.obtenerPorId(id);
    Object.assign(usuario, data);
    return this.usuarioRepository.save(usuario);
}

    async eliminar(id: number): Promise<void> {
    const resultado = await this.usuarioRepository.delete(id);
    if (resultado.affected === 0) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
}
}
