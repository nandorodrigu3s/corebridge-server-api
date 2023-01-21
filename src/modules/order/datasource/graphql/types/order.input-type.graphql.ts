import { InputType, Int, Field } from '@nestjs/graphql';
@InputType()
export class OrderInput {
  @Field()
  orderId: string;
}
