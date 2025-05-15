import { Module } from '@nestjs/common';
import { AvisoController } from './aviso.controller';
import { AvisoService } from './aviso.service';

@Module({
  controllers: [AvisoController],
  providers: [AvisoService]
})
export class AvisoModule {}
