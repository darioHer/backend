import { IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    apellido?: string;

    @IsOptional()
    @IsString()
    usuario?: string;

    @IsOptional()
    rolId?: number;
}
