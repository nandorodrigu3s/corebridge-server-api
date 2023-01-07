import { ObjectType, Field } from '@nestjs/graphql';
import { NFTData } from '../../../../../graphql/types/nft-data/nft-data.object-type.graphql';

@ObjectType()
export class Cart {
  @Field(() => [NFTData], {
    nullable: 'items',
    description: 'Uma lista de NFTs adicionados ao carrinho',
  })
  nfts: Partial<NFTData>[];
}
