import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInCredentialsDto{
    @ApiProperty({description: 'Email', example: 'darth.vader@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({description: 'Password', example: 'deadStar'})
    @IsString()
    @IsNotEmpty()
    password: string;
}