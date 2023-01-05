import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { AuthModel } from './model/auth.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authLogin(user: UserModel): Promise<any> {
    const { password, ...result } = user;
    const payload = { username: user.username, sub: user.userId };
    const newToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: 120,
    });
    return { user: result, token: newToken };
  }

  async findByUsername(username: string): Promise<UserModel> {
    const user = await this.userService.getUserByUsername(username);
    return user;
  }

  async validateUserById(id: number): Promise<any> {
    const user = await this.userService.getUserById(id);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(auth: AuthModel) {
    const payload = { username: auth.username, sub: auth.password };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
