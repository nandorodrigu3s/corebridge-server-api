import { CreateCartInput } from './create-cart.input-type.graphql';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCartInput extends PartialType(CreateCartInput) {
  @Field(() => Int)
  id: number;
}
