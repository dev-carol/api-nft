import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GetLoggedUser } from 'src/auth/decorators/get-logged-user.decorator';

import { User } from '../user/user.entity';
import { Collections } from './collection.entity';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/collection.create.dto';

@Controller('Collections')
@ApiSecurity('Authorization')
@ApiTags('Collections')
@UseGuards(AuthGuard())
export class CollectionsController {
  constructor(private readonly service: CollectionService) {}

  @Post()
  public async createCollection(
    @Body() createDto: CreateCollectionDto,
    @GetLoggedUser() user: User,
  ): Promise<Collections> {
    return this.service.create(createDto, user);
  }
}
