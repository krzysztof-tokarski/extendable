import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateTodoDto } from '@models/todos/create-todo-dto.model';
import { SharedModule } from '@shared/shared.module';
import { CustomValidators } from '@shared/validation/custom-validators';
import { TodosApiService } from '../services/todos-api.service';
import { AddTodoFormGroup } from './models/add-todo-form.type';

const MATERIAL_IMPORTS = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
];

@Component({
  selector: 'extendable-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MATERIAL_IMPORTS,
  ],
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
    this.todosApi.createTodo({
      ...this.form.value,
      userId: '636417968f9dfa630038a5da',
    } as CreateTodoDto);
  }
}
