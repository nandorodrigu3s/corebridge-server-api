import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUser {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
