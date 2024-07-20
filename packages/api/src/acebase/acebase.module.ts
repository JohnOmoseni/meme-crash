import { Global, Module } from '@nestjs/common';
import { AcebaseService } from './acebase.service';
import { AcebaseController } from './acebase.controller';
@Global()
@Module({
  controllers: [AcebaseController],
  providers: [AcebaseService],
  exports: [AcebaseService],
})
export class AcebaseModule {}
