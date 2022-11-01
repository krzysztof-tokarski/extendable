/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// devserver

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix(environment.GLOBAL_PREFIX);
  const port = environment.PORT;
  await app.listen(port);

  Logger.log(`🚀 Application is running on: ${environment.API_URL}`);
}

bootstrap();
