import { Test, TestingModule } from '@nestjs/testing';
import { TarifPikulService } from './tarif-pikul.service';

describe('TarifPikulService', () => {
  let service: TarifPikulService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarifPikulService],
    }).compile();

    service = module.get<TarifPikulService>(TarifPikulService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
