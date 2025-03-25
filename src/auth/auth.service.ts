import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/interface/IUser';
import { UsersService } from 'src/users/users.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { ConfigService } from '@nestjs/config';
import { encodeStringToFourDigit } from 'src/utils/encodeStringToFourDigit';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private logger: GlobalLogger,
    private readonly configService: ConfigService,
  ) {}

  async signIn(idk: string, pass: string): Promise<any> {
    try {
      const user: IUser = await this.usersService.findOne(idk);

      const decodedPassword = await encodeStringToFourDigit(user?.password);

      if (decodedPassword.toString() !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
        user: user.fullname,
        idk: user.idk,
      };
    } catch (error) {
      this.logger.error('kesalahan saat sign in: ', error);
    }
  }
}
