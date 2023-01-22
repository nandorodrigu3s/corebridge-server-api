import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { GqlJWTAuthGuard } from '../../../../auth/guards/gql-jwt-auth.guard';
import { UserService } from '../../../user.service';
import { CreateUserInput } from '../types/create-user.input-type.graphql';
import { User } from '../types/user.object-type.graphql';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => User, { nullable: true })
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User | null> {
    const user = await this.userService.createUser(createUserInput);
    return user;
  }

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getByUsername(
    @Args('username') username: string,
  ): Promise<User | null> {
    const user = await this.userService.getUserByUsername(username, true);
    return user;
  }

  @Query((returns) => User, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getUser(@Context() context): Promise<User | null> {
    const { user }: any = context.req;
    const userModel = await this.userService.getByUserId(user.userId);
    return userModel;
  }

  // @Mutation((returns) => User, { nullable: true })
  // @UseGuards(GqlJWTAuthGuard)
  // async updateUser(
  //   @Args('updateUserInput') updateUserInput: UpdateUserInput,
  // ): Promise<User | null> {
  //   const user = await this.userService.createUser(updateUserInput);
  //   return user;
  // }
}
