import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';

@Injectable()
export class PrometheusMiddleware implements NestMiddleware {
  constructor(private readonly prometheusService: PrometheusService) {}
  use(req: any, res: any, next: () => void) {
    const { method, originalUrl } = req;
    const imei = req.body['npk'];
    console.log('imei: ', imei);
    this.prometheusService.incrementRequestCounter(
      method,
      originalUrl,
      imei,
      '200',
    );
    next();
  }
}
