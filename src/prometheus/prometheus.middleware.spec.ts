import { PrometheusMiddleware } from './prometheus.middleware';

describe('PrometheusMiddleware', () => {
  it('should be defined', () => {
    expect(new PrometheusMiddleware()).toBeDefined();
  });
});
