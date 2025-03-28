
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'rol'})
export class RolEntity {
  @PrimaryGeneratedColumn()
  rol_id: number;

  @Column({ unique: true })
  rol_nombre: string;

  @OneToMany(() => UsuarioEntity, (usuario) => usuario.rol)
  usuarios: UsuarioEntity[];

}
