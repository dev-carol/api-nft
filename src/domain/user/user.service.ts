import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()

export class UserService{
    constructor(private readonly repository: UserRepository){}

    public async createUser( name: string, email: string, password: string, salt: string): Promise<User>{
        const user = this.repository.create({
            name,
            email,
            password,
            salt
        });
        return user.save();
    }

    public async findById(id: string): Promise<User | null>{
        return this.repository.findOne({id});
    }

    public async findByNameOrEmail(name: string, email: string): Promise<User | null>{
        return this.repository.findByNameOrEmail(name,email)
    }

    public async findByNameOrEmailForLogin(name: string, email: string):Promise <User | null>{
        return this.repository.findByNameOrEmailForLogin(name,email)
    }

}