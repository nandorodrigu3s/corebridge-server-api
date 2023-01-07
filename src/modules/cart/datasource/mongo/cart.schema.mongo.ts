import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { NFTData } from '../../../../datasource/mongodb/schemas/nft-data.schema.mongo';

@Schema({ timestamps: true })
export class Cart {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  nfts: NFTData[];

  @Prop({ type: Date, required: false })
  canceledAt: Date;
}

export type CartEntity = Document<Cart>;
export const CartSchema = SchemaFactory.createForClass(Cart);
