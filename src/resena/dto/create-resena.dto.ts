import { IsInt, IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateResenaDto {
  @IsInt()
  @Min(1)
  @Max(5)
  calificacion: number;

  @IsString()
  @IsNotEmpty()
  comentario: string;

  @IsInt()
  usuarioId: number;

  @IsInt()
  productoId: number;
}
