import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
  // async profile(@Query('id') id: number) {
  //   const user = await this.userService.getUserByID(+id);
  //   return { user };
  // }
}
