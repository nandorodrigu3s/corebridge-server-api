import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { AuthService } from '../../../auth.service';
import { GqlAuthGuard } from '../../../guards/graphql-auth.guard';
import { Auth } from '../types/auth.input-type.graphql';
import { AuthData } from '../types/auth.object-type.graphql';

@Resolver((of) => AuthData)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthData, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('authInput') authInput: Auth,
    @Context() context,
  ): Promise<AuthData | null> {
    const user = await this.authService.authLogin(context.user);
    return user;
  }
}
