import { Test, TestingModule } from '@nestjs/testing';
import { TpgController } from './tpg.controller';

describe('TpgController', () => {
  let controller: TpgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TpgController],
    }).compile();

    controller = module.get<TpgController>(TpgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
