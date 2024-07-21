import { Module } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { RoundsService } from 'src/rounds/rounds.service';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService, RoundsService],
})
export class ChartsModule {}
