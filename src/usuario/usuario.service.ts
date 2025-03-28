import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne({ where: { usu_id:id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UsuarioEntity> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
    const usuarioActualizado = await this.findOne(id);
    return usuarioActualizado;
  }

  async remove(id: number): Promise<void> {
    const result = await this.usuarioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  }
}
