import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interface/IUser';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(private userService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }
}
