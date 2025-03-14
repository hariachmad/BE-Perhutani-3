import { Injectable } from '@nestjs/common';
import { IUser } from './interface/IUser';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto/create-users.dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import encodeTo32Char from 'src/utils/encodeToString32';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private logger: GlobalLogger,
  ) {}

  async findOne(idk: string): Promise<IUser> {
    this.logger.log('Request to get user');
    try {
      return await this.prisma.user.findFirst({
        where: {
          idk: idk,
        },
      });
    } catch (error) {
      this.logger.error('Error when get all users: ', error);
    }
  }

  async UpsertUser(createUsersDto: CreateUsersDto) {
    const password = encodeTo32Char(createUsersDto.idk);
    try {
      return await this.prisma.user.upsert({
        where: { id: createUsersDto.id },
        update: {
          idk: createUsersDto.idk,
          satuan: createUsersDto.satuan,
          fullname: createUsersDto.fullname,
          username: createUsersDto.username,
          password: password,
          tpg: createUsersDto.tpg,
        },
        create: {...createUsersDto,password: password},
      });
    } catch (error) {
      this.logger.error('Error when upsert user: ', error);
    }
  }

  async findAll(): Promise<IUser[]> {
    this.logger.log('Request to get all users');
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      this.logger.error('Error when get all users: ', error);
    }
  }
}
