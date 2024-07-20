import { Test, TestingModule } from '@nestjs/testing';
import { AcebaseService } from './acebase.service';

describe('AcebaseService', () => {
  let service: AcebaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcebaseService],
    }).compile();

    service = module.get<AcebaseService>(AcebaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
