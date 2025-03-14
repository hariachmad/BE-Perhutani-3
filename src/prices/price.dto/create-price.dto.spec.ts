import { CreatePriceDto } from './create-price.dto';

describe('PriceDto', () => {
  it('should be defined', () => {
    expect(new CreatePriceDto()).toBeDefined();
  });
});
