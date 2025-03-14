import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

import { PrometheusController } from './prometheus.controller';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [PrometheusController],
})
export class PrometheusCostumModule {}
