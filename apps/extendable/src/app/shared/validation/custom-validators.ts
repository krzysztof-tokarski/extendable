import { Validators } from '@angular/forms';

export class CustomValidators {
  public static standardTextAreaComposition = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(256),
  ]);
}
