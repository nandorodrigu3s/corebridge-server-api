import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NFTCollection {
  @Field()
  created_date: Date;
  @Field()
  name: string;
}
