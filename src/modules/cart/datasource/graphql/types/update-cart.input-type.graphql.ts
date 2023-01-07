import { InputType, Field } from '@nestjs/graphql';
import { NFTDataInput } from '../../../../../graphql/types/nft-data/nft-data.input-type.graphql';

@InputType()
export class UpdateCartInput {
  @Field(() => NFTDataInput, {
    nullable: true,
    description: 'Um NFT para ser atualizado no carrinho',
  })
  nft: NFTDataInput;
}
