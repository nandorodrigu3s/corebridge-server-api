import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './datasource/graphql/resolver/cart.resolver.graphql';

@Module({
  providers: [CartResolver, CartService]
})
export class CartModule {}
