import { InputType, Field } from '@nestjs/graphql';
import { NFTDataInput } from '../../../../../graphql/types/nft-data/nft-data.input-type.graphql';
import { UpdateCartType } from './update-cart.enum.graphql';

@InputType()
export class UpdateCartInput {
  @Field(() => NFTDataInput, {
    nullable: true,
    description: 'Um NFT para ser atualizado no carrinho',
  })
  nft: Partial<NFTDataInput>;
  @Field(() => UpdateCartType)
  type: UpdateCartType;
}
