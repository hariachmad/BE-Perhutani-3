import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  firstValueFrom,
  interval,
  retry,
  startWith,
  switchMap,
  timer,
} from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/interface/IUser';
import { PricesService } from 'src/prices/prices.service';
import { ITpg } from 'src/tpg/interface/ITpg';
import { TpgService } from 'src/tpg/tpg.service';
import { ITarifGetah } from 'src/tarif-getah/interface/ITarifGetah';
import { TarifGetahService } from 'src/tarif-getah/tarif-getah.service';
import { IGeo } from 'src/geo/interface/IGeo';
import { GeoService } from 'src/geo/geo.service';
import { PenyadapService } from 'src/penyadap/penyadap.service';
import { IPenyadap } from 'src/penyadap/interface/IPenyadap';
import { ITarifPikul } from 'src/tarif-pikul/interface/ITarifPikul';
import { TarifPikulService } from 'src/tarif-pikul/tarif-pikul.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { UserHasTpgService } from 'src/user-has-tpg/user-has-tpg.service';
import { TpgUsersDto } from 'src/user-has-tpg/dto/tpg-users-dto/tpg-users-dto';
import { UserDto } from 'src/user-has-tpg/dto/user-dto/user-dto';
@Injectable()
export class PollingService implements OnModuleInit {
  // private readonly logger = new Logger(PollingService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly pricesService: PricesService,
    private readonly tpgServices: TpgService,
    private readonly tarifGetahService: TarifGetahService,
    private readonly geoService: GeoService,
    private readonly penyadapService: PenyadapService,
    private readonly tarifPikulService: TarifPikulService,
    private readonly logger: GlobalLogger,
    private readonly userHasTpgService: UserHasTpgService,
  ) {}

  private async pollDataUsers(): Promise<IUser[]> {
    // const url: string = this.configService.get<string>(
    //   'http://localhost:3001/users',
    // )!;

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
      const users: IUser[] = responseUsers.data.data;
      // console.log('users: ', users);
      return users;
    } catch (err) {
      this.logger.error('Error fetch data poll users', err.message);
      console.error('Error fetch data poll users', err.message);
      throw err;
    }
  }

  private async pollDataTpg(): Promise<ITpg[]> {
    try {
      this.logger.log('Polling Tpg');
      const responseTpg: any = await firstValueFrom(
        this.httpService.get(this.configService.get<string>('TPG_ENDPOINT'), {
          headers: {
            'Api-Key': `${this.configService.get<string>('TOKEN')}`,
          },
        }),
      );
      const tpg: ITpg[] = responseTpg.data.data;
      return tpg;
    } catch (err) {
      this.logger.error('Error fetch data poll Tpg', err.message);
      console.error('Error fetch data poll Tpg', err.message);
    }
  }

  private async pollDataTarifGetah(): Promise<ITarifGetah[]> {
    try {
      this.logger.log('Polling Tarif Getah');
      const responseTarifGetah: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_GETAH_ENDPOINT'),
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      const tarifGetah: ITarifGetah[] = responseTarifGetah.data.data;
      return tarifGetah;
    } catch (err) {
      this.logger.error('Error fetch data Tarif Getah', err.message);
      console.error('Error fetch data Tarif Getah', err.message);
    }
  }

  private async pollDataGeo(): Promise<IGeo[]> {
    try {
      this.logger.log('Polling Geo');
      const responseGeo: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_GEO_ENDPOINT'),
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      const geo: IGeo[] = responseGeo.data.data;
      return geo;
    } catch (err) {
      this.logger.error('Error fetch data Geo', err.message);
      console.error('Error fetch data Geo', err.message);
    }
  }

  private async pollDataPenyadap(): Promise<IPenyadap[]> {
    try {
      this.logger.log('Polling Penyadap');
      const responsePenyadap: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_PENYADAP_ENDPOINT'),
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      const penyadap: IPenyadap[] = responsePenyadap.data.data;
      return penyadap;
    } catch (err) {
      this.logger.error('Error fetch data Penyadap', err.message);
      console.error('Error fetch data Penyadap', err.message);
    }
  }

  private async pollDataTarifPikul(): Promise<ITarifPikul[]> {
    try {
      this.logger.log('Polling Tarif Pikul');
      const responseTarifPikul: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_PIKUL_ENDPOINT'),
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      const tarifPikul: ITarifPikul[] = responseTarifPikul.data.data;
      return tarifPikul;
    } catch (err) {
      this.logger.error('Error fetch data Tarif Pikul', err.message);
      console.error('Error fetch data Tarif Pikul', err.message);
    }
  }

  // private pollFunc: Array<() => Promise<ITpg[] | IPrice[] | IUser[]>> = [
  //   this.pollDataTpg,
  //   this.pollDataPrices,
  //   this.pollDataUsers,
  // ];

  onModuleInit() {
    timer(
      this.configService.get<number>('POLLING_USER_START'),
      this.configService.get<number>('POLLING_USER_INTERVAL'),
    )
      .pipe(
        switchMap(() => this.pollDataUsers()),
        retry(100),
      )
      .subscribe((data) => {
        const users: IUser[] = data;
        this.logger.log('Upserting Users');
        // console.log('Users : ', users);
        users?.map(async (user: IUser) => {
          const isSuccess = await this.usersService.UpsertUser(user);
          if (isSuccess) {
            console.log('Upserted User');
          }
        });
        this.logger.log('Upserted User');
      });

    timer(
      this.configService.get<number>('POLLING_TARIF_GETAH_START'),
      this.configService.get<number>('POLLING_TARIF_GETAH_INTERVAL'),
    )
      .pipe(
        switchMap(() => this.pollDataTarifGetah()),
        retry(100),
      )
      .subscribe((data) => {
        if (data) {
          const tarif_getah: ITarifGetah[] = data;
          this.logger.log('Upserting Tarif Getah');
          tarif_getah?.map(async (tarif_getah_: ITarifGetah) => {
            const isSuccess = await this.tarifGetahService.Upsert(tarif_getah_);
            if (isSuccess) {
              console.log('Upserted Tarif Getah');
            }
          });
          this.logger.log('Upserted Tarif Getah');
        } else {
          this.logger.log('Data Tarif Getah Tidak ada');
        }
      });
    timer(
      this.configService.get<number>('POLLING_TARIF_PIKUL_START'),
      this.configService.get<number>('POLLING_TARIF_PIKUL_INTERVAL'),
    )
      .pipe(
        switchMap(() => this.pollDataTarifPikul()),
        retry(100),
      )
      .subscribe((data) => {
        if (data) {
          const tarifPikul: ITarifPikul[] = data;
          this.logger.log('Upserting Tarif Pikul');
          tarifPikul?.map(async (tarifPikul_: ITarifPikul) => {
            const isSuccess = await this.tarifPikulService.Upsert(tarifPikul_);
            if (isSuccess) {
              console.log('Upserted Tarif Pikul');
            }
          });
          this.logger.log('Upserted Tarif Pikul');
        } else {
          this.logger.log('Data tarif pikul tidak ada');
        }
      });
    timer(
      this.configService.get<number>('POLLING_TPG_START'),
      this.configService.get<number>('POLLING_TPG_INTERVAL'),
    )
      .pipe(
        switchMap(async () => {
          const users: UserDto[] =
            await this.userHasTpgService.getDataUsersWithTpg();
          if (!users) {
            console.log('data users tidak ada');
            return;
          }
          return this.userHasTpgService.partialToTpgUsers(users);
        }),
        retry(100),
      )
      .subscribe((data: TpgUsersDto[]) => {
        if (data) {
          this.logger.log('Upserting TPG');
          data.map((users) => {
            if (!users.tpg) {
              return;
            }
            users.tpg.map(async (tpg) => {
              const isSuccess = await this.tpgServices.Upsert({
                kodeTpg: tpg.kode ?? '-',
                namaTpg: tpg.nama ?? '-',
                jenisTpg: users.username ?? '-',
              });
              if (isSuccess) {
                console.log('Upserted TPG');
              }
            });
          });
          // this.logger.log('Upserted TPG');
        } else {
          this.logger.log('Data TPG Tidak ada');
        }
      });
    timer(
      this.configService.get<number>('POLLING_GEO_START'),
      this.configService.get<number>('POLLING_GEO_INTERVAL'),
    )
      .pipe(
        switchMap(async () => {
          console.log('get data users with tpg');
          const users: UserDto[] =
            await this.userHasTpgService.getDataUsersWithTpg();
          return users;
        }),
        retry(100),
      )
      .subscribe((data: UserDto[]) => {
        if (data) {
          data.map((users) => {
            if (!users.username) {
              return;
            }
            this.geoService.fetchGeo(users.username).then((results) => {
              console.log('username: ', users.username);
              if (!results || !results.data || !results.data.data) {
                return;
              }
              results.data.data.map(async (result) => {
                const isSuccess = await this.geoService.Upsert(result);
                if (isSuccess) {
                  console.log('Upserted GEO');
                }
              });
            });
          });
          // this.logger.log('Upserted GEO');
        } else {
          this.logger.log('Data GEO Tidak ada');
        }
      });
    timer(
      this.configService.get<number>('POLLING_PENYADAP_START'),
      this.configService.get<number>('POLLING_PENYADAP_INTERVAL'),
    )
      .pipe(
        switchMap(async () => {
          console.log('get data penyadap');
          const users: UserDto[] =
            await this.userHasTpgService.getDataUsersWithTpg();
          return users;
        }),
        retry(100),
      )
      .subscribe((data: UserDto[]) => {
        if (data) {
          data.map((users) => {
            if (!users.username) {
              return;
            }
            this.penyadapService
              .fetchPenyadap(users.username)
              .then((results) => {
                if (!results || !results.data || !results.data.data) {
                  return;
                }
                results.data.data.map(async (result) => {
                  const isSuccess = await this.penyadapService.Upsert(result);
                  if (isSuccess) {
                    console.log('Upserted Penyadap');
                  }
                });
              });
          });
          // this.logger.log('Upserted Penyadap');
        } else {
          this.logger.log('Data Penyadap Tidak ada');
        }
      });
  }
}
