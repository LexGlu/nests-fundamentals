import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // this will remove any properties that are not in the DTO
    transform: true, // this will transform the incoming data to the DTO type
    forbidNonWhitelisted: true, // this will throw an error if there are properties that are not in the DTO
  }));
  await app.listen(3000);
}
bootstrap();