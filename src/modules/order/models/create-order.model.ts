import { NFTData } from '../../../system/models/nft-data.model';
import { Price } from '../../../system/models/price.model';
import { OrderStatusType } from './order-status.enum';

export class CreateOrderModel {
  userId: string;
  nfts: NFTData[];
  totalPayment: Price;
  status: OrderStatusType;
  discount?: Price;
}
