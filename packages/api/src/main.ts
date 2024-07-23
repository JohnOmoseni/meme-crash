import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3010);

  const signals = ['SIGTERM', 'SIGINT'];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      console.log(`Received ${signal}, closing server...`);
      await app.close();
      console.log('Server closed.');
      process.exit(0);
    });
  });
}

bootstrap()
  .then(() => console.log('Server started'))
  .catch((err) => console.log(err));
