import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsString()
    usuario: string;

    

    @IsNotEmpty()
    rolId: number;
}
