import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserModel } from 'src/modules/user/model/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserModel> {
    const user = await this.authService.findByUsername(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException(
        'Ops, dados de login inválidos, favor verifique e tente novamente.',
      );
    }
    return user;
  }
}
