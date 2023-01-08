import { NFTData } from 'src/system/models/nft-data.model';
import { Price } from 'src/system/models/price.model';
import { OrderStatusType } from './order-status.enum';

export class OrderModel {
  userId: string;
  orderId: string;
  nfts: NFTData[];
  status: OrderStatusType;
  totalPayment: Price;
  discount?: Price;
  createdAt: Date;
  updatedAt?: Date;
  canceledAt?: Date;
}
