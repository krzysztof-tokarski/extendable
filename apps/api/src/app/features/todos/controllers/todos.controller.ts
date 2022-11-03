import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateTodoDto } from 'libs/api-interfaces/src';
import { TodosMdbService } from '../services/todos-mdb.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosMdbService) {}

  @Post()
  public addTodo(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.create(createTodoDto);
  }
}
