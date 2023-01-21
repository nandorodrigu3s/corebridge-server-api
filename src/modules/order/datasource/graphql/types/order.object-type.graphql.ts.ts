import { Field, ObjectType } from '@nestjs/graphql';
import { NFTData } from '../../../../../graphql/types/nft-data/nft-data.object-type.graphql';
import { Price } from '../../../../../graphql/types/price/price.object-type.graphql';
import { OrderStatusType } from './order-status.enum.graphql';

@ObjectType()
export class Order {
  @Field()
  orderId: string;
  @Field(() => [NFTData])
  nfts: NFTData[];
  @Field(() => OrderStatusType)
  status: OrderStatusType;
  @Field(() => Price)
  totalPayment: Price;
  @Field(() => Price, { nullable: true })
  discount?: Price;
  @Field(() => Date, { nullable: true })
  canceledAt?: Date;
}
