import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  // const app = await NestFactory.create(MessagesModule);


  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "*",
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
