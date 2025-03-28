import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { ResenaEntity } from './entity/resena.entity';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { ProductoEntity } from 'src/producto/entity/producto.entity';


@Injectable()
export class ResenaService {
  constructor(
    @InjectRepository(ResenaEntity)
    private readonly resenaRepository: Repository<ResenaEntity>,
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
    @InjectRepository(ProductoEntity)
    private readonly productoRepository: Repository<ProductoEntity>,
  ) {}

  async create(createResenaDto: CreateResenaDto) {
    const usuario = await this.usuarioRepository.findOne({ where: { usu_id: createResenaDto.usuarioId } });
    const producto = await this.productoRepository.findOne({ where: { pro_id: createResenaDto.productoId } });
    
    if (!usuario || !producto) {
      throw new Error('Usuario o producto no encontrado');
    }
    
    const nuevaResena = this.resenaRepository.create({
      ...createResenaDto,
      usuario,
      producto,
    });
    return await this.resenaRepository.save(nuevaResena);
  }

  async findAll() {
    return await this.resenaRepository.find();
  }

  async findOne(id: number) {
    return await this.resenaRepository.findOne({ where: { rese_id: id } });
  }

  async update(id: number, updateResenaDto: UpdateResenaDto) {
    await this.resenaRepository.update(id, updateResenaDto);
    return this.findOne(id);
  }
    async remove(id: number) {
    return await this.resenaRepository.delete(id);
}
}