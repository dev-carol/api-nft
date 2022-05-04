import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/domain/user/user.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService, private readonly userService: UserService){
      super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrkey: configService.get<string>('JWT_SECRET'),
      });
  }

  async validate(payload: JwtPayload){
      const {sub} = payload;
      const user = this.userService.findById(sub);

     if(!user){
         throw new UnauthorizedException();
     }
     return user;
  }
}