import { NFTData } from 'src/system/models/nft-data.model';
import { UpdateCartType } from '../datasource/graphql/types/create-cart.enum.graphql';

export class UpdateCartModel {
  type: UpdateCartType;
  nft: Partial<NFTData>;
}
