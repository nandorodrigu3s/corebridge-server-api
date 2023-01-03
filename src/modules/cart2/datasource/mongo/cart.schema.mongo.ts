import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class Cart {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  nfts: string[];

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: false })
  canceledAt: Date;
}

export type CartEntity = Document<Cart>;
export const CartSchema = SchemaFactory.createForClass(Cart);
