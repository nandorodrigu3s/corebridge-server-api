import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { NFTData } from 'src/datasource/mongodb/schemas/nft-data.schema.mongo';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, min: 0 })
  countAssets: number;

  @Prop({ required: true })
  wallet: NFTData[];

  @Prop({ type: Date, required: false })
  canceledAt: Date;
}

export type UserEntity = Document<User>;
export const UserSchema = SchemaFactory.createForClass(User);
