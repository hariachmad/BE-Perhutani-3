import { Test, TestingModule } from '@nestjs/testing';
import { TarifGetahService } from './tarif-getah.service';

describe('TarifGetahService', () => {
  let service: TarifGetahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarifGetahService],
    }).compile();

    service = module.get<TarifGetahService>(TarifGetahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
