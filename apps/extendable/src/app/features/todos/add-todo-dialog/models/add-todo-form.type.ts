import { FormControl, FormGroup } from '@angular/forms';

export type AddTodoFormGroup = FormGroup<AddTodoForm>;

interface AddTodoForm {
  title: FormControl<string>;
  description: FormControl<string>;
  deadline: FormControl<Date>;
}
