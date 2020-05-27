import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: env.TCP_PORT || 4000,
      host: 'auth-service'
    }
  })
  await app.startAllMicroservicesAsync();

  await app.listen(env.port || 3002);
}
bootstrap();
