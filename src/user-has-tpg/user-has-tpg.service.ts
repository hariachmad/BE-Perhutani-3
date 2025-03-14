import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserDto } from './dto/user-dto/user-dto';
import { firstValueFrom } from 'rxjs';
import { TpgUsersDto } from './dto/tpg-users-dto/tpg-users-dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class UserHasTpgService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly loggerService: GlobalLogger,
  ) {}

  async getDataUsersWithTpg(): Promise<UserDto[]> {
    try {
      const responseUsers: any = await firstValueFrom(
        this.httpService.get(this.configService.get<string>('USERS_ENDPOINT'), {
          headers: {
            'Api-Key': `${this.configService.get<string>('TOKEN')}`,
          },
        }),
      );
      if (!responseUsers.data.data) {
        throw Error('Error Database Union saat getUsers dari union');
      }
      const users: UserDto[] = responseUsers.data.data;
      // console.log('users: ', users);
      return users;
    } catch (err) {
      this.loggerService.error('Error : ', err);
    }
  }

  partialToTpgUsers(userDto: UserDto[]): TpgUsersDto[] {
    const TpgUsersDto: TpgUsersDto[] = [];
    userDto.map((user) => {
      const { username, tpg } = user;
      TpgUsersDto.push({ username, tpg });
    });
    return TpgUsersDto;
  }
}
