import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class PrometheusMiddleware implements NestMiddleware {
  constructor(
    private readonly prometheusService: PrometheusService,
    private readonly logger: GlobalLogger,
  ) {}
  use(req: any, res: any, next: () => void) {
    const { method, originalUrl } = req;
    const npk = req.body['npk'];
    this.logger.log('npk:' + npk + 'sending Penerimaan Getah');
    this.prometheusService.incrementRequestCounter(
      method,
      originalUrl,
      npk,
      '200',
    );
    next();
  }
}
