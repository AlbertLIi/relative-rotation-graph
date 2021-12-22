import { Module } from '@nestjs/common';
import { SectorService } from './services/sector.service';
import { Controller } from './sector/controllers/.controller';
import { SectorController } from './controllers/sector/sector.controller';
import { Controller } from './controllers/.controller';

@Module({
  providers: [SectorService],
  controllers: [Controller, SectorController]
})
export class SectorModule {}
