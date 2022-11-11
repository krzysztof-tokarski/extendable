import { FormControl, FormGroup } from '@angular/forms';

export type AuthFormGroup = FormGroup<AuthForm>;

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
