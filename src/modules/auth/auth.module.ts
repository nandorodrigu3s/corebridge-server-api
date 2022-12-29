import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule],
  providers: [AuthService, LocalStrategy, JwtService, JwtStrategy],
})
export class AuthModule {}
