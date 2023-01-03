import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Auth {
  @Field()
  username: string;

  @Field()
  password: string;
}
