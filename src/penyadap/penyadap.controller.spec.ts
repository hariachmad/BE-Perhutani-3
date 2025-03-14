import { Test, TestingModule } from '@nestjs/testing';
import { PenyadapController } from './penyadap.controller';

describe('PenyadapController', () => {
  let controller: PenyadapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenyadapController],
    }).compile();

    controller = module.get<PenyadapController>(PenyadapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
