import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NFTCollection } from '../nft-collection/nft-collection.object-type.graphql copy';
import { Price } from '../price/price.object-type.graphql';

@ObjectType()
export class NFTData {
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
  token_id: string;
  @Field(() => NFTCollection)
  collection: NFTCollection;
  @Field(() => Price, { nullable: true })
  price: Price;
}
