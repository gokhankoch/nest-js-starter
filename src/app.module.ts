import { Module } from '@nestjs/common';

import { HealthController } from './health/health.controller';

import { DB } from './database/database';

@Module({
  imports: DB(),
  controllers: [HealthController],
})
export class AppModule {}
