import { Injectable } from '@nestjs/common';
import { Counter, register } from 'prom-client';

@Injectable()
export class PrometheusService {
  public httpRequestCounter: Counter;

  constructor() {
    this.httpRequestCounter = new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'imei', 'status'],
    });

    register.registerMetric(this.httpRequestCounter);
  }

  incrementRequestCounter(
    method: string,
    route: string,
    imei: string,
    status: string,
  ) {
    this.httpRequestCounter.inc({ method, route, imei, status });
  }
}
