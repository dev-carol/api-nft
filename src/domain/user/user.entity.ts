import { CustomBaseEntity } from 'src/shared/custom-base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends CustomBaseEntity {
  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  email: string;

  @Column({ nullable: false, type: 'varchar', select: false })
  password: string;

  @Column({ nullable: false, type: 'varchar' })
  salt: string;
}
