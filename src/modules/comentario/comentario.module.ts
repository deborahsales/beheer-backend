import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';

@Module({
  controllers: [ComentarioController]
})
export class ComentarioModule {}
