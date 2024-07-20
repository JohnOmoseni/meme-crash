import { Test, TestingModule } from '@nestjs/testing';
import { AcebaseController } from './acebase.controller';
import { AcebaseService } from './acebase.service';

describe('AcebaseController', () => {
  let controller: AcebaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcebaseController],
      providers: [AcebaseService],
    }).compile();

    controller = module.get<AcebaseController>(AcebaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
