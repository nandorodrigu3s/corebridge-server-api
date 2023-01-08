import { NFTData } from '../../../system/models/nft-data.model';
import { Price } from '../../../system/models/price.model';
import { StatusType } from './status.enum';

export class CreateOrderModel {
  userId: string;
  nfts: NFTData[];
  totalPayment: Price;
  status: StatusType;
  discount?: Price;
}
