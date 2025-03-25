import { Test, TestingModule } from '@nestjs/testing';
import { FetchCounterController } from './fetch-counter.controller';

describe('FetchCounterController', () => {
  let controller: FetchCounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchCounterController],
    }).compile();

    controller = module.get<FetchCounterController>(FetchCounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
