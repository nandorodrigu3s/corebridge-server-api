import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class NFTCollection {
  @Prop({ type: Date, required: true })
  created_date: Date;
  @Prop({ required: true })
  name: string;
}

export type NFTDataEntity = Document<NFTCollection>;
export const NFTCollectionSchema = SchemaFactory.createForClass(NFTCollection);
