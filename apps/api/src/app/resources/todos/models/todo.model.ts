import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  deadline: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
