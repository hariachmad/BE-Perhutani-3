import { Test, TestingModule } from '@nestjs/testing';
import { TpgService } from './tpg.service';

describe('TpgService', () => {
  let service: TpgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TpgService],
    }).compile();

    service = module.get<TpgService>(TpgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
