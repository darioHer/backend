import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuarios/usuario.entity';
import { UsuarioController } from './usuarios.controller';
import { UsuarioService } from './usuarios.service';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
