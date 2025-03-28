import { ResenaEntity } from 'src/resena/entity/resena.entity';
import { RolEntity } from 'src/rol/entity/rol.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'usuario'})
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  usu_id: number;

  @Column({ unique: true })
  usu_nombreUsuario: string;

  @Column()
  usu_email: string;

  @Column()
  usu_password: string;

  @ManyToOne(() => RolEntity, (rol) => rol.usuarios, { nullable: false, onDelete: 'CASCADE' })
  rol: RolEntity;

  @OneToMany(() => ResenaEntity, (resena) => resena.usuario)
  resenas: ResenaEntity[];
}
