import { Module } from '@nestjs/common';
import { OrderResolver } from './datasource/graphql/resolver/order.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './datasource/mongo/order.schema.mongo';
import { OrderService } from './order.service';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { UserService } from '../user/user.service';
import { UserSchema } from '../user/datasource/mongo/user.schema.mongo';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'orders', schema: OrderSchema },
      { name: 'users', schema: UserSchema },
    ]),
    JwtModule,
  ],
  providers: [
    OrderResolver,
    OrderService,
    JwtService,
    JwtStrategy,
    UserService,
  ],
  exports: [OrderService],
})
export class OrderModule {}
