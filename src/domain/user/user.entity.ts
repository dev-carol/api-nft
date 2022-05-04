import { CustomBaseEntity } from 'src/shared/custom-base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Collections } from '../collections/collection.entity';
import { NFT } from '../nft/nft.entity';

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

  @OneToMany(
    () => Collections,
    (collections: Collections) => collections.author,
    {
      nullable: true,
    },
  )
  collections: Collections[];

  @ManyToMany(() => NFT, (nft: NFT) => nft.likes, {
    nullable: true,
  })
  likedNfts: NFT[];
}
