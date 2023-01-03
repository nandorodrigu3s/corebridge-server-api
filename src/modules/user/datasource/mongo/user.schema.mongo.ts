import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  assets: number;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: false })
  editedAt: Date;

  @Prop({ required: false })
  canceledAt: Date;
}

export type UserEntity = Document<User>;
export const UserSchema = SchemaFactory.createForClass(User);
