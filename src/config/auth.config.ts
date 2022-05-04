import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const authConfig: JwtModuleAsyncOptions ={
    imports: [ConfigModule],
    useFactory: async(configservice: ConfigService)=>({
        secret: configservice.get<string>('JWT_SECRET'),
        signOptions: {
            expiresIn: configservice.get<string>('JWT_EXPIRATION_TIME')
        }
    }),
    inject: [ConfigModule]
}