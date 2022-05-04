import { CustomBaseEntity } from "src/shared/custom-base.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity('collections')

export class Collections extends CustomBaseEntity{

    @Column({nullable: false, type: 'varchar'})
    name:string;

    @ManyToOne(() => User, (user: User) => user.collections, {
        nullable: false,
        eager: true
    })
    author: User;
}