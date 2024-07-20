import { Module } from '@nestjs/common';
import { IndexerService } from './indexer.service';
import { IndexerController } from './indexer.controller';
import { BettorsService } from 'src/bettors/bettors.service';

@Module({
  controllers: [IndexerController],
  providers: [IndexerService, BettorsService],
})
export class IndexerModule {}
