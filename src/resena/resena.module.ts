import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResenaService } from './resena.service';
import { ResenaController } from './resena.controller';
import { ResenaEntity } from './entity/resena.entity';
import { UsuarioController } from 'src/usuario/usuario.controller';
import { ProductoController } from 'src/producto/producto.controller';


@Module({
  imports: [TypeOrmModule.forFeature([ResenaEntity, UsuarioController, ProductoController])],
  controllers: [ResenaController],
  providers: [ResenaService],
})
export class ResenaModule {}
