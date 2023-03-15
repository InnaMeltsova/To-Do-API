import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class List extends mongoose.Document {
  @Prop({ type: String, default: uuidv4, required: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  listTasks: [];
    
}

const transform = (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
}

export const ListSchema = SchemaFactory.createForClass(List).set('toJSON', { transform });