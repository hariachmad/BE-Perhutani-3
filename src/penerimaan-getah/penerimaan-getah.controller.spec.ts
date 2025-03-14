import { Test, TestingModule } from '@nestjs/testing';
import { PenerimaanGetahController } from './penerimaan-getah.controller';

describe('PenerimaanGetahController', () => {
  let controller: PenerimaanGetahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenerimaanGetahController],
    }).compile();

    controller = module.get<PenerimaanGetahController>(
      PenerimaanGetahController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
