import { NFTData } from '../../../system/models/nft-data.model';

export class CreateCartModel {
  userId: string;
  nfts: NFTData[];
}
