import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NFTCollectionInput {
  @Field()
  created_date: Date;
  @Field()
  name: string;
}
