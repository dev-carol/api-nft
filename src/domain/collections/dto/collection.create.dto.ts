import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateCollectionDto{
    @ApiProperty({description: 'Name', example: 'Star wars'})
    @IsString()
    @IsNotEmpty({message: 'name is required'})
    name: string;

}