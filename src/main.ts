import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { ZodValidationPipe } from 'nestjs-zod';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(new ZodValidationPipe());

  await app.listen(process.env.PORT ?? 3003);
}

void bootstrap();
