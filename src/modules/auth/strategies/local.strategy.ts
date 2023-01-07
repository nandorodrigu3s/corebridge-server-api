import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserModel } from '../../user/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserModel> {
    const user = await this.authService.findByUsername(username);
    const passValidate =
      user?.password ?? 'k0T$hR*1(637&21YhaÇÇWm.//}[]aaadkasoiioE23)++__+122';
    const isValidPassword = await bcrypt.compare(password, passValidate);

    if (!user || !isValidPassword) {
      throw new UnauthorizedException(
        'Ops, dados de login inválidos, favor verifique e tente novamente.',
      );
    }
    return user;
  }
}
