import { Counter, register } from 'prom-client';

const httpRequestCounter = new Counter({
  name: 'post_penerimaan_getah',
  help: 'Total number of Penerimaan Getah POST',
  labelNames: ['method', 'route', 'npk', 'status'],
});

httpRequestCounter
  .labels({
    method: 'POST',
    route: '/penerimaan-getah',
    npk: '170115119',
    status: '200',
  })
  .inc(0);

register.registerMetric(httpRequestCounter);
