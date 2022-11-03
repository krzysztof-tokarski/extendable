import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from './controllers/todos.controller';
import { Todo, TodoSchema } from './models/todo.model';
import { TodosMdbService } from './services/todos-mdb.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosMdbService],
})
export class TodosModule {}
