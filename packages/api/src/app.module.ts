import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexerModule } from './indexer/indexer.module';
import { BettorsModule } from './bettors/bettors.module';
import { AcebaseModule } from './acebase/acebase.module';

@Module({
  imports: [AcebaseModule, IndexerModule, BettorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
