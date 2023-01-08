import { Field, ObjectType } from '@nestjs/graphql';
import { NFTDataInput } from '../../../../../graphql/types/nft-data/nft-data.input-type.graphql';
import { PriceInput } from '../../../../../graphql/types/price/price.input-type.graphql';
import { StatusType } from '../../../models/status.enum';

@ObjectType()
export class Order {
  @Field()
  orderId: string;
  @Field(() => [NFTDataInput])
  nfts: NFTDataInput[];
  @Field(() => StatusType)
  status: StatusType;
  @Field(() => PriceInput)
  totalPayment: PriceInput;
  @Field(() => PriceInput, { nullable: true })
  discount?: PriceInput;
  @Field(() => Date, { nullable: true })
  canceledAt?: Date;
}
