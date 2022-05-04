import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
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
  @ApiOperation({summary: 'Register an Account'})
  public async signUp(@Body() credentialsDto: SignUpCredentialsDto): Promise<User | null> {
      return this.authService.singUp(credentialsDto)
  }
  

  @Post('signIn')
  @ApiOperation({summary: 'Login an Account'})
  public async signIn(@Body()credentialsDto: SignInCredentialsDto): Promise<{accessToken: string} | null>{
     return this.authService.signIn(credentialsDto)
  }
    

}