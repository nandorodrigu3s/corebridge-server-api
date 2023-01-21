import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path';
import { AuthModule } from '../auth/auth.module';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from '../cart/cart.module';
import { OrderModule } from '../order/order.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    UserModule,
    AuthModule,
    CartModule,
    OrderModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), 'src/graphql/app-schema/schema.gql')],
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}test`),
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtService],
})
export class AppModule {}
