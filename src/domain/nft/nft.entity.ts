import { CustomBaseEntity } from 'src/shared/custom-base.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Collections } from '../collections/collection.entity';
import { User } from '../user/user.entity';

@Entity('nfts')
export class NFT extends CustomBaseEntity {
  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  hash: string;

  @Column({ nullable: false, type: 'varchar' })
  photoUrl: string;

  @Column({ nullable: false, type: 'decimal' })
  price: number;

  @ManyToOne(() => Collections, (collection: Collections) => collection.nfts, {
    nullable: false,
    eager: true,
    onDelete: 'CASCADE',
  })
  parentCollection: Collections;

  @ManyToMany(() => User, (user: User) => user.likedNfts, {
    nullable: false,
    eager: true,
  })
  @JoinTable({
    name: 'nft_likes',
    joinColumn: { name: 'nftId' },
    inverseJoinColumn: { name: 'userId' },
  })
  likes: User[];
}
