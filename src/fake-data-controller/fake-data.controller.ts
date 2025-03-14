import { Controller, Get } from '@nestjs/common';
import { FakeDataService } from './fake-data.service';
import { IUser } from 'src/users/interface/IUser';

@Controller('fake-data-controller')
export class FakeDataController {
  constructor(private readonly fakeDataService: FakeDataService) {}

  @Get()
  getUsers(): IUser[] {
    return this.fakeDataService.generateFakeUsers(10);
  }
}
