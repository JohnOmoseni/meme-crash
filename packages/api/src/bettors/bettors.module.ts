import { Module } from '@nestjs/common';
import { BettorsService } from './bettors.service';
import { BettorsController } from './bettors.controller';
import { AcebaseService } from 'src/acebase/acebase.service';

@Module({
  controllers: [BettorsController],
  providers: [BettorsService],
  exports: [BettorsService],
})
export class BettorsModule {}
