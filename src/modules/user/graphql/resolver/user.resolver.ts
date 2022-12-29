import { ResolveField, Parent } from '@nestjs/graphql';
import { Resolver, Query, Arg } from 'type-graphql';
import { UserService } from '../../user.service';
import { User } from '../types/user.object-type.graphql';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Arg('token') token: string, @Arg('name') name: string) {
    return this.userService.getUserByUsername(name);
  }
}
