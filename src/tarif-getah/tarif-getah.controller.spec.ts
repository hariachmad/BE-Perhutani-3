import { Test, TestingModule } from '@nestjs/testing';
import { TarifGetahController } from './tarif-getah.controller';

describe('TarifGetahController', () => {
  let controller: TarifGetahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarifGetahController],
    }).compile();

    controller = module.get<TarifGetahController>(TarifGetahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
