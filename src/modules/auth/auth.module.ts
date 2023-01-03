import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthResolver } from './datasource/graphql/resolver/auth.resolver';

@Module({
  imports: [UserModule, PassportModule, JwtModule],
  providers: [
    AuthService,
    LocalStrategy,
    JwtService,
    JwtStrategy,
    AuthResolver,
  ],
  exports: [AuthService],
})
export class AuthModule {}
