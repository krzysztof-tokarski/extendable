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
    private fb: NonNullableFormBuilder
  ) {}

  private createForm(): AddTodoFormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      deadline: ['', [Validators.required]],
    });
  }
}
