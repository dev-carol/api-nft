import { EntityRepository, Repository } from "typeorm";
import { Collections } from "./collection.entity";

@EntityRepository(Collections)

export class CollectionRepository extends Repository<Collections>{}
