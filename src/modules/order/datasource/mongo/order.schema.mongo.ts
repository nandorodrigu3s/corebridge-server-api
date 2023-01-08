import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { Price } from '../../../../datasource/mongodb/schemas/price.schema.mongo';
import { NFTData } from '../../../../datasource/mongodb/schemas/nft-data.schema.mongo';

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  nfts: NFTData[];

  @Prop({
    required: true,
    type: String,
    enum: ['COMPLETE', 'PENDIND', 'CANCELED', 'FAILED'],
  })
  status: string;

  @Prop({ required: true })
  totalPayment: Price;

  @Prop({ required: false })
  discount: Price;

  @Prop({ type: Date, required: false })
  canceledAt: Date;
}

export type OrderEntity = Document<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
