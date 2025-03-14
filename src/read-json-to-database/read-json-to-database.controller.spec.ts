import { Test, TestingModule } from '@nestjs/testing';
import { ReadJsonToDatabaseController } from './read-json-to-database.controller';

describe('ReadJsonToDatabaseController', () => {
  let controller: ReadJsonToDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadJsonToDatabaseController],
    }).compile();

    controller = module.get<ReadJsonToDatabaseController>(
      ReadJsonToDatabaseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
