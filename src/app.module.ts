import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constans';
import { ProductoModule } from './producto/producto.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './producto/producto.controller';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ResenaModule } from './resena/resena.module';




@Module({
  imports: [
    
  ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get(DB_HOST),
      port: +configService.get(DB_PORT),
      username: configService.get(DB_USER),
      password: configService.get(DB_PASSWORD),
      database: configService.get(DB_DATABASE),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      migrationsRun: false,
    }),
    inject: [ConfigService],
  }),
  
  ProductoModule,
  RolModule,
  UsuarioModule,
  ResenaModule

  ],
  controllers: [AppController, ProductoController,],
  providers: [AppService, ConfigService,],
})
export class AppModule {}
