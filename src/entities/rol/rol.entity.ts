import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity('roles')
export class RolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true })
    nombre: string;

    @OneToMany(() => UsuarioEntity, (usuario) => usuario.rol)
    usuarios: UsuarioEntity[];
}
