import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  age!: number;

  @Prop({ required: true, index: true })
  gender!: number;

  @Prop({ index: true })
  links?: Array<string>;

  @Prop({ default: () => Date.now(), index: true })
  created: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
