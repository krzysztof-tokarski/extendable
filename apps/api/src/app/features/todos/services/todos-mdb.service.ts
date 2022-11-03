import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from '../models/todo.model';
import { CreateTodoDto } from 'libs/api-interfaces/src';

@Injectable()
export class TodosMdbService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  public async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return new this.todoModel(createTodoDto).save();
  }
}
