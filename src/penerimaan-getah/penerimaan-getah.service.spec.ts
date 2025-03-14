import { Test, TestingModule } from '@nestjs/testing';
import { PenerimaanGetahService } from './penerimaan-getah.service';

describe('PenerimaanGetahService', () => {
  let service: PenerimaanGetahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenerimaanGetahService],
    }).compile();

    service = module.get<PenerimaanGetahService>(PenerimaanGetahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
