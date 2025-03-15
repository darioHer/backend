import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class UpdateProductoDto {




    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    pro_nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    pro_precio?: number;
}