import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { CollectionsController } from "./collection.controler";
import { CollectionRepository } from "./collection.repository";
import { CollectionService } from "./collection.service";

@Module({
    imports: [TypeOrmModule.forFeature([CollectionRepository]), AuthModule],
    controllers: [CollectionsController],
    providers: [CollectionService]
})

export class CollectionModule{}