import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class PriceInput {
  @Field()
  label: string;
  @Field(() => Float)
  value: number;
}
