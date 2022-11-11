import { Body, Controller, Post } from '@nestjs/common';
import { TodosMdbService } from '../services/todos-mdb.service';
import { CreateTodoDto } from '@models/todos/create-todo-dto.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosMdbService) {}

  @Post()
  public addTodo(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.create(createTodoDto);
  }
}
