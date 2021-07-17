import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

import {
  DocumentBuilder,
  SwaggerModule,
  SwaggerCustomOptions,
} from '@nestjs/swagger';

import CONFIG from './config/default';
import * as helmet from 'helmet';

async function bootstrap(port = CONFIG.SERVER.DEFAULT_PORT) {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const documentBuilder = new DocumentBuilder()
    .setTitle('Nest-js-starter-service')
    .setDescription('nest-js-starter-service description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'nest-js-starter-serviceDocs',
  };
  SwaggerModule.setup('api', app, document, customOptions);

 
  // Stripping properties
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  //app.setGlobalPrefix('v1');
  app.enableCors();
  app.use(helmet());

  await app.listen(port);
  logger.log(`Application listening port ${port}`);
}
bootstrap(CONFIG.SERVER.PORT);
