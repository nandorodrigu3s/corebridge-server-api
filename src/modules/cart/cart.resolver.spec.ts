import { Test, TestingModule } from '@nestjs/testing';
import { CartResolver } from './datasource/graphql/resolver/cart.resolver.graphql';
import { CartService } from './cart.service';

describe('CartResolver', () => {
  let resolver: CartResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartResolver, CartService],
    }).compile();

    resolver = module.get<CartResolver>(CartResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
