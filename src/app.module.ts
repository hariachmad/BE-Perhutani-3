/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PricesModule } from './prices/prices.module';
import { LogModule } from './log/log.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadController } from './upload/upload.controller';
import { FilesController } from './files/files.controller';
import { PollingService } from './polling/polling.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FakeDataController } from './fake-data-controller/fake-data.controller';
import { FakeDataService } from './fake-data-controller/fake-data.service';
import { InterceptorController } from './interceptor/interceptor.controller';
import { TpgModule } from './tpg/tpg.module';
import { TarifGetahModule } from './tarif-getah/tarif-getah.module';
import { GeoModule } from './geo/geo.module';
import { PenyadapModule } from './penyadap/penyadap.module';
import { TarifPikulModule } from './tarif-pikul/tarif-pikul.module';
import { GlobalLogger } from './global-logger/global-logger.service';
import { AuthModule } from './auth/auth.module';
import { PenerimaanGetahModule } from './penerimaan-getah/penerimaan-getah.module';
import { UserHasTpgModule } from './user-has-tpg/user-has-tpg.module';
import { UserHasTpgService } from './user-has-tpg/user-has-tpg.service';
import { ReadJsonToDatabaseModule } from './read-json-to-database/read-json-to-database.module';
import { XlsxModule } from './xlsx/xlsx.module';
import { PrometheusCostumModule } from './prometheus/prometheus.module';
import { PrometheusMiddleware } from './prometheus/prometheus.middleware';
import { PrometheusService } from './prometheus/prometheus.service';
import { PenerimaanGetahController } from './penerimaan-getah/penerimaan-getah.controller';

@Module({
  imports: [
    PrometheusCostumModule,
    UsersModule,
    HttpModule,
    PrismaModule,
    PricesModule,
    LogModule,
    TpgModule,
    TarifGetahModule,
    GeoModule,
    PenyadapModule,
    TarifPikulModule,
    UserHasTpgModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PenerimaanGetahModule,
    XlsxModule,
  ],
  controllers: [
    AppController,
    UploadController,
    FilesController,
    FakeDataController,
    InterceptorController,
  ],
  providers: [
    AppService,
    PollingService,
    FakeDataService,
    GlobalLogger,
    UserHasTpgService,
    PrometheusService
  ],
})
export class AppModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(PrometheusMiddleware).forRoutes(PenerimaanGetahController);
  }
}
