import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CreateTodoDto } from '@models/todos/create-todo-dto.model';

@Injectable({
  providedIn: 'root',
})
export class TodosApiService {
  constructor(private http: HttpClient) {}

  public createTodo(todo: CreateTodoDto) {
    this.http.post(`${environment.API_URL}/todos`, todo).subscribe();
  }
}
