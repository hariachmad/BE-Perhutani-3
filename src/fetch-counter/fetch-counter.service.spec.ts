import { Test, TestingModule } from '@nestjs/testing';
import { FetchCounterService } from './fetch-counter.service';

describe('FetchCounterService', () => {
  let service: FetchCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchCounterService],
    }).compile();

    service = module.get<FetchCounterService>(FetchCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
