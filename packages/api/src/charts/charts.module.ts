import { Module } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { RoundsService } from 'src/rounds/rounds.service';
import ChartGateway from './chart.gateway';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService, RoundsService, ChartGateway],
})
export class ChartsModule {}
