import { Test, TestingModule } from '@nestjs/testing';
import { ReadJsonToDatabaseService } from './read-json-to-database.service';

describe('ReadJsonToDatabaseService', () => {
  let service: ReadJsonToDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadJsonToDatabaseService],
    }).compile();

    service = module.get<ReadJsonToDatabaseService>(ReadJsonToDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
