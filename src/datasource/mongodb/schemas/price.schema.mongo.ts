import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Decimal128, Document } from 'mongoose';

@Schema()
export class Price {
  @Prop({ required: true })
  label: string;
  @Prop({ required: true })
  value: string;
}

export type PriceEntity = Document<Price>;
export const PriceSchema = SchemaFactory.createForClass(Price);
