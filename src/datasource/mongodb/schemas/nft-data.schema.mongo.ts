import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { NFTCollection } from './nft-collections.schema.mongo';
import { Price } from './price.schema.mongo';

@Schema()
export class NFTData {
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  num_sales: number;
  @Prop({ required: true })
  category: string;
  @Prop({ required: true })
  image_url: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  external_link: string;
  @Prop({ required: true })
  permalink: string;
  @Prop({ required: true })
  collection: NFTCollection;
  @Prop({ required: true })
  token_id: string;
  @Prop({ required: false })
  price: Price;
}

export type NFTDataEntity = Document<NFTData>;
export const NFTDataSchema = SchemaFactory.createForClass(NFTData);
