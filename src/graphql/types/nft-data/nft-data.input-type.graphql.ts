import { InputType, Field, Int } from '@nestjs/graphql';
import { NFTCollectionInput } from '../nft-collection/nft-collection.input-type.graphql';
import { PriceInput } from '../price/price.input-type.graphql';

@InputType()
export class NFTDataInput {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  num_sales: number;
  @Field()
  category: string;
  @Field()
  image_url: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  external_link: string;
  @Field()
  permalink: string;
  @Field()
  collection: NFTCollectionInput;
  @Field()
  token_id: string;
  @Field()
  price: PriceInput;
}
