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
import { HttpModule } from '@nestjs/axios';
import { AppXRequestHttp } from './datasource/http/app-x-request.http';
import { AppResolver } from './datasource/graphql/app.resolver.graphql';
import { NFTDTOToModelMapper } from './mappers/nft-list-dto-to-model.mapper';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    UserModule,
    AuthModule,
    CartModule,
    OrderModule,
    HttpModule,
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`, {
      useNewUrlParser: true,
      dbName: `${process.env.MONGODB_DATABASE}`,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), 'src/graphql/app-schema/schema.gql')],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolver,
    LocalStrategy,
    JwtService,
    AppXRequestHttp,
    NFTDTOToModelMapper,
  ],
})
export class AppModule {}
