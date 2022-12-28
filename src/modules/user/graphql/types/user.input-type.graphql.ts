import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class User {
  @Field()
  token: string;
}
