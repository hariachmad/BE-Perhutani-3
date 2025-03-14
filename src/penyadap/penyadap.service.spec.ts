import { Test, TestingModule } from '@nestjs/testing';
import { PenyadapService } from './penyadap.service';

describe('PenyadapService', () => {
  let service: PenyadapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenyadapService],
    }).compile();

    service = module.get<PenyadapService>(PenyadapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
