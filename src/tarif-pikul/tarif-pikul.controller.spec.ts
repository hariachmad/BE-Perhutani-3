import { Test, TestingModule } from '@nestjs/testing';
import { TarifPikulController } from './tarif-pikul.controller';

describe('TarifPikulController', () => {
  let controller: TarifPikulController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarifPikulController],
    }).compile();

    controller = module.get<TarifPikulController>(TarifPikulController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
