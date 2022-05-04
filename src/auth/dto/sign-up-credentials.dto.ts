import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpCredentialsDto{
    @ApiProperty({description: 'Name', example: 'darthVader'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: 'Email', example: 'darth.vader@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({description: 'Password', example: 'deadStart'})
    @IsString()
    @IsNotEmpty()
    password: string;
}