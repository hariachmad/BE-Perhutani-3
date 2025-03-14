import { Test, TestingModule } from '@nestjs/testing';
import { UserHasTpgService } from './user-has-tpg.service';

describe('UserHasTpgService', () => {
  let service: UserHasTpgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasTpgService],
    }).compile();

    service = module.get<UserHasTpgService>(UserHasTpgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
