import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSignInDto } from './create-sign-in-dto/create-sign-in-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: CreateSignInDto) {
    console.log('signInDto: ', signInDto);
    return this.authService.signIn(signInDto.idk, signInDto.password);
  }
}
