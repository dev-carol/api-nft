import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Collections } from './collection.entity';
import { CollectionRepository } from './collection.repository';
import { CreateCollectionDto } from './dto/collection.create.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly repository: CollectionRepository) {}

  public async create (
    createDto: CreateCollectionDto,
    loggerUser: User,
  ): Promise<Collections> {
    const { name } = createDto;

    const collection = this.repository.create({
      name,
      author: loggerUser,
    });

    await collection.save();

    delete collection.author;

    return collection;
  }
}
