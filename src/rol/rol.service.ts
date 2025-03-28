import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from './entity/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,
  ) {}

  async create(createRolDto: CreateRolDto): Promise<RolEntity> {
    const rol = this.rolRepository.create(createRolDto);
    return await this.rolRepository.save(rol);
  }

  async findAll(): Promise<RolEntity[]> {
    return await this.rolRepository.find();
  }

  async findOne(id: number): Promise<RolEntity> {
    const rol = await this.rolRepository.findOne({ where: { rol_id:id } });
    if (!rol) throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    return rol;
  }

  async update(id: number, updateRolDto: UpdateRolDto): Promise<RolEntity> {
    const rol = await this.findOne(id);
    Object.assign(rol, updateRolDto);
    return await this.rolRepository.save(rol);
  }

  async remove(id: number): Promise<string> {
    const rol = await this.findOne(id);
    await this.rolRepository.remove(rol);
    return `Rol con ID ${id} eliminado correctamente`;
  }
}
