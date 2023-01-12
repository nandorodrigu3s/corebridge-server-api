import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NFTData } from '../../../../../graphql/types/nft-data/nft-data.object-type.graphql';

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int, { nullable: true })
  countAssets: number;

  @Field(() => [NFTData], { nullable: 'items' })
  wallet: NFTData[];
}
