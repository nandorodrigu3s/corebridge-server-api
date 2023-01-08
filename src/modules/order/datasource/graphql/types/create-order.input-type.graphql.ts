import { InputType, Field } from '@nestjs/graphql';
import { NFTDataInput } from 'src/graphql/types/nft-data/nft-data.input-type.graphql';
import { PriceInput } from 'src/graphql/types/price/price.input-type.graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => [NFTDataInput])
  nfts: NFTDataInput[];
  @Field(() => PriceInput)
  totalPayment: PriceInput;
  @Field(() => PriceInput, { nullable: true })
  discount?: PriceInput;
}
