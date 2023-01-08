import { NFTData } from 'src/system/models/nft-data.model';
import { UpdateCartType } from './update-cart.enum';

export class UpdateCartModel {
  type: UpdateCartType;
  nft: Partial<NFTData>;
}
