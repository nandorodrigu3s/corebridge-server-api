import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../../../user/datasource/graphql/types/user.object-type.graphql';

@ObjectType()
export class AuthData {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
