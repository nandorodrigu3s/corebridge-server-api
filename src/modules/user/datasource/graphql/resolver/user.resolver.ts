import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GqlJWTAuthGuard } from '../../../../auth/guards/gql-jwt-auth.guard';
import { UserService } from '../../../user.service';
import { User } from '../types/user.object-type.graphql';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getUser(
    @Args('token') token: string,
    @Args('username') name: string,
  ): Promise<User | null> {
    const user = await this.userService.getUserByUsername(name);
    return user;
  }

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getByUserId(
    @Args('token') token: string,
    @Args('userId') userId: string,
  ): Promise<User | null> {
    const user = await this.userService.getByUserId(userId);
    return user;
  }
}
