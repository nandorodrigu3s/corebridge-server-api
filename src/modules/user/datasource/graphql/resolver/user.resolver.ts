import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GqlJWTAuthGuard } from '../../../../auth/guards/gql-jwt-auth.guard';
import { UserService } from '../../../user.service';
import { CreateUser } from '../types/create-user.input-type.graphql';
import { User } from '../types/user.object-type.graphql';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getUser(@Args('username') name: string): Promise<User | null> {
    const user = await this.userService.getUserByUsername(name);
    return user;
  }

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getByUserId(@Args('userId') userId: string): Promise<User | null> {
    const user = await this.userService.getByUserId(userId);
    return user;
  }

  @Mutation((returns) => User, { nullable: true })
  async createUser(
    @Args('createUserInput') createUserInput: CreateUser,
  ): Promise<User | null> {
    const user = await this.userService.createUser(createUserInput);
    return user;
  }
}
