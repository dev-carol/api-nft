import { Body, Controller, Delete, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({summary: 'Create a collection '})
  public async createCollection(
    @Body() createDto: CreateCollectionDto,
    @GetLoggedUser() user: User,
  ): Promise<Collections> {
    return this.service.create(createDto, user);
  }
  
  @Delete('/:id')
  @ApiOperation({summary: 'Delete a collection '})
  public async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    return this.service.delete(id);
  }
}
