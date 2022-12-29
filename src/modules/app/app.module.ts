import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PassportModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy, JwtService],
})
export class AppModule {}
