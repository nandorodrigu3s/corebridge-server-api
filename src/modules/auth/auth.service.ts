import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserById(id: number): Promise<any> {
    const user = await this.userService.getUserByID(id);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: 30,
      }),
    };
  }
}
