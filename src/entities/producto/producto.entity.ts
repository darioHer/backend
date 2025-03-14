import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'producto' })
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    prod_id: number;

    @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
    prod_nombre: string; 

    @Column({ type: 'varchar', length: 100 })
    prod_descripcion: string;

    @Column({ type: 'float', nullable: false })
    prod_precio: number;

    @Column({ type: 'int', nullable: false })
    prod_stock: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    prod_categoria: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    prod_proveedor: string;
}

