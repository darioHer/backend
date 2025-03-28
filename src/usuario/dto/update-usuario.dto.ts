import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  usu_nombreUsuario?: string;

  @IsEmail()
  @IsOptional()
  usu_email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  usu_password?: string;
}
