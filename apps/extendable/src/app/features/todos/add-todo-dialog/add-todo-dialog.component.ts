import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { CustomValidators } from '@shared/validation/custom-validators';
import { CreateTodoDto } from 'libs/api-interfaces/src';
import { TodosApiService } from '../services/todos-api.service';
import { AddTodoFormGroup } from './models/add-todo-form.type';

@Component({
  selector: 'extendable-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss'],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class AddTodoDialogComponent {
  protected form: AddTodoFormGroup = this.createForm();

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private fb: NonNullableFormBuilder,
    private todosApi: TodosApiService
  ) {}

  private createForm(): AddTodoFormGroup {
    return this.fb.group({
      title: this.fb.control('', { validators: [Validators.required] }),
      description: this.fb.control('', {
        validators: CustomValidators.standardTextAreaComposition,
      }),
      deadline: this.fb.control(new Date(), [Validators.required]),
    });
  }

  // TODO proper implementation
  protected processSubmit() {
    const { title, description, deadline } = this.form.value;

    const createTodoDto = {
      title,
      description,
      deadline,
      userId: '636417968f9dfa630038a5da',
    } as CreateTodoDto;

    this.todosApi.createTodo(createTodoDto);
  }
}
