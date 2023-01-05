import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { UserResolver } from './datasource/graphql/resolver/user.resolver';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './datasource/mongo/user.schema.mongo';
// import { UserRepository } from './repository/user.repository';
// import { UserMongoDbDatasource } from './datasource/mongo/user.db-datasource.mongo';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    AuthService,
    UserService,
    JwtService,
    LocalStrategy,
    UserResolver,
  ],
  exports: [UserService],
})
export class UserModule {}
