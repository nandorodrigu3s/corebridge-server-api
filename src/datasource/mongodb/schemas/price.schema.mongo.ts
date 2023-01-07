import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Decimal128, Document } from 'mongoose';

@Schema()
export class Price {
  @Prop({ required: true })
  label: string;
  @Prop({ required: true })
  value: Decimal128;
}

export type PriceEntity = Document<Price>;
export const CartSchema = SchemaFactory.createForClass(Price);
