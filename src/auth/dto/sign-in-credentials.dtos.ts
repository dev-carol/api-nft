import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInCredentialsDto{

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}