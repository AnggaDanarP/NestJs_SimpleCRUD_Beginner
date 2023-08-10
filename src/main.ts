import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000).then(() => {
    console.log('successfully started on port 5000');
  });
}

bootstrap();
