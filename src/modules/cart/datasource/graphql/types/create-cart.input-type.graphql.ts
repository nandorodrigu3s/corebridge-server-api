import { InputType, Int, Field } from '@nestjs/graphql';
import { NFTDataInput } from '../../../../../graphql/types/nft-data/nft-data.input-type.graphql';

@InputType()
export class CreateCartInput {
  @Field(() => [NFTDataInput], {
    nullable: 'items',
    description: 'Uma lista de NFTs para serem adicionadas ao carrinho',
  })
  nfts: NFTDataInput[];
}
