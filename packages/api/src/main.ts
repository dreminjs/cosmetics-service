import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import fastifyCookie from '@fastify/cookie';
import multipart from '@fastify/multipart';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(fastifyCookie);

  await app.register(multipart, {
    limits: { fileSize: 5 * 1024 * 1024 },
  });

  app.enableCors({ origin: 'http://localhost:5173', credentials: true });

  app.useGlobalPipes(new ZodValidationPipe());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Tutor AI')
    .setDescription('The Tutor AI API description')
    .setVersion('1.0')
    .addTag('tutors')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
