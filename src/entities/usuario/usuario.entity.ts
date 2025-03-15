import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RolEntity } from '../rol/rol.entity';


@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100 })
    apellido: string;

    @Column({ length: 100, unique: true })
    usuario: string;

    @Column({ length: 100 })
    contrasena: string;

    @Column({ length: 100 })
    correo: string;

    @ManyToOne(() => RolEntity, (rol) => rol.usuarios)
    rol: RolEntity;
}
