import { Module } from '@nestjs/common';
import { CronogramaController } from './cronograma.controller';

@Module({
  controllers: [CronogramaController]
})
export class CronogramaModule {}
