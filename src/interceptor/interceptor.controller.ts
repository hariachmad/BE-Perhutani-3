import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('interceptor')
export class InterceptorController {
  @Get()
  async findall() {
    throw new HttpException('This is Your Message', HttpStatus.OK);
  }
}
