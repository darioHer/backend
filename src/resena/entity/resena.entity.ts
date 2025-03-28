import { ProductoEntity } from 'src/producto/entity/producto.entity';
import { RolEntity } from 'src/rol/entity/rol.entity';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class ResenaEntity {
    @PrimaryGeneratedColumn()
    rese_id: number;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.resenas, { eager: true })
    usuario: UsuarioEntity;

    @ManyToOne(() => ProductoEntity, producto => producto.resenas, { eager: true })
    producto: ProductoEntity;

    @ManyToOne(() => RolEntity, (rol) => rol.resenas, { nullable: false, onDelete: 'CASCADE' })
    rol: RolEntity;

    @Column({ type: 'int', default: 0 })
    calificacion: number;

    @Column({ type: 'text' })
    comentario: string;

    @CreateDateColumn()
    fechaCreacion: Date;
}