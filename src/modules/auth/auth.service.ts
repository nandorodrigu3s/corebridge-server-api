import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { AuthModel } from './model/auth.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authLogin(user: User): Promise<any> {
    const { password, ...result } = user;
    const payload = { username: user.username, sub: user.userId };
    const newToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: 35,
    });
    return { user: result, token: newToken };
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userService.getUserByUsername(username);
    return user;
  }

  async validateUserById(id: number): Promise<any> {
    const user = await this.userService.getUserByID(id);
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
