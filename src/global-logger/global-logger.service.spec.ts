import { Test, TestingModule } from '@nestjs/testing';
import { GlobalLoggerService } from './global-logger.service';

describe('GlobalLoggerService', () => {
  let service: GlobalLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalLoggerService],
    }).compile();

    service = module.get<GlobalLoggerService>(GlobalLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
