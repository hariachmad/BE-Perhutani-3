import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interface/IUser';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';
import { FetchCounterService } from 'src/fetch-counter/fetch-counter.service';

@Controller('users')
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private userService: UsersService,
    private fetchCounterService: FetchCounterService,
  ) {}

  // @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<IUser[]> {
    const result: any = await this.fetchCounterService.increment(
      new Date().toISOString().split('T')[0],
    );
    console.log('result: ', result);
    return await this.userService.findAll();
  }
}
