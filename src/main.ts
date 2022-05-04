import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle('API NFT')
  .setDescription('API working NFTs')
  .setVersion('1.0')
  .addSecurity('Authorization', {
    type: 'apiKey',
    name: 'Authorization',
    description: 'Enter Authorization token',
    in: 'header',
  })
  .build();
  const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
