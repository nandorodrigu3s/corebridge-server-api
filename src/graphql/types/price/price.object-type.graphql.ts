import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { NFTCollection } from '../nft-collection/nft-collection.object-type.graphql copy';
import { PriceInput } from './price.input-type.graphql';

@ObjectType()
export class Price extends PriceInput {
  @Field()
  label: string;
  @Field(() => Float)
  value: number;
}
