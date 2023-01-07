import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { CartService } from './cart.service';
import { CartResolver } from './datasource/graphql/resolver/cart.resolver.graphql';
import { CartSchema } from './datasource/mongo/cart.schema.mongo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'carts', schema: CartSchema }]),
    JwtModule,
  ],
  providers: [CartResolver, CartService, JwtService, JwtStrategy],
  exports: [CartService],
})
export class CartModule {}
