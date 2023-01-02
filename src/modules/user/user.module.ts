import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { UserResolver } from './graphql/resolver/user.resolver';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
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
