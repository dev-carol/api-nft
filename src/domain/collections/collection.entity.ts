import { CustomBaseEntity } from 'src/shared/custom-base.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { NFT } from '../nft/nft.entity';
import { User } from '../user/user.entity';

@Entity('collections')
export class Collections extends CustomBaseEntity {
  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @ManyToOne(() => User, (user: User) => user.collections, {
    nullable: false,
    eager: true,
  })
  author: User;

  @OneToMany(() => NFT, (nft: NFT) => nft.parentCollection, {
    nullable: false,
  })
  nfts: NFT[];
}
