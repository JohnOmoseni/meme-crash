import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexerModule } from './indexer/indexer.module';
import { BettorsModule } from './bettors/bettors.module';
import { AcebaseModule } from './acebase/acebase.module';
import { ChartsModule } from './charts/charts.module';
import { RoundsModule } from './rounds/rounds.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    AcebaseModule,
    IndexerModule,
    ScheduleModule.forRoot(),
    ChartsModule,
    BettorsModule,
    RoundsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
