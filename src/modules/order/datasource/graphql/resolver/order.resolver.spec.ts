import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from '../../../order.service';
import { OrderResolver } from './order.resolver';

describe('OrderResolver', () => {
  let resolver: OrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderResolver, OrderService],
    }).compile();

    resolver = module.get<OrderResolver>(OrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
