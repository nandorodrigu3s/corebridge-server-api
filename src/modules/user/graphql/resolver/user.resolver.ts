import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GqlJWTAuthGuard } from '../../../../modules/auth/guards/gql-jwt-auth.guard';
import { UserService } from '../../user.service';
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
}
