import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/domain/user/user.entity";
import { UserService } from "src/domain/user/user.service";
import { AuthService } from "./auth.service";
import { SignInCredentialsDto } from "./dto/sign-in-credentials.dtos";
import { SignUpCredentialsDto } from "./dto/sign-up-credentials.dto";

@Controller('auth')
@ApiTags('Auth')
export class AuthController{
  constructor(private readonly authService: AuthService){}

  @Post('/signUp')
  public async signUp(@Body() credentialsDto: SignUpCredentialsDto): Promise<User | null> {
      return this.authService.singUp(credentialsDto)
  }
  

  @Post('signIn')
  public async signIn(@Body()credentialsDto: SignInCredentialsDto): Promise<{accessToken: string} | null>{
     return this.authService.signIn(credentialsDto)
  }
    

}