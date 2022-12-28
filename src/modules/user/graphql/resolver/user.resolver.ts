import { ResolveField, Parent } from '@nestjs/graphql';
import { Resolver, Query, Arg } from 'type-graphql';
import { UserService } from '../../user.service';
import { User } from '../types/user.object-type.graphql';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User)
  async getUser(
    @Arg('token', { nullable: true }) token: string,
    @Arg('name') name: string,
    @Arg('password') password: string,
  ) {
    return this.userService.getUserByName(name, password);
  }
}
