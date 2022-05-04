import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findByNameOrEmail(
    name: string,
    email: string,
  ): Promise<User | null> { 
    let user: User = null;

    user = await this.findOne({ name });

    if (!user) user = await this.findOne({ email });

    return user;
  }

  public async findByNameOrEmailForLogin(
    name: string,
    email: string,
  ): Promise<User | null> {
    let user: User = null;

    user = await this.findOne({
      where: { name },
      select: ['id', 'name', 'email', 'password', 'salt'],
    });

    if (!user)
      user = await this.findOne({
        where: { email },
        select: ['id', 'name', 'email', 'password', 'salt'],
      }); 

    return user;
  }

  public async findByIdWithRelations(id: string): Promise<User | null> {
    return this.findOne({
      where: { id },
      relations: ['collections', 'likedNfts', 'collections.nfts'],
    })
  }
}