import { AbstractControl, Validators } from '@angular/forms';

export class CustomValidators {
  private static globalMinLength = 3;
  private static globalTextInputMaxLength = 50;
  private static globalTextAreaMaxLength = 256;

  public static standardTextInputComposition = Validators.compose([
    Validators.required,
    Validators.minLength(CustomValidators.globalMinLength),
    Validators.maxLength(CustomValidators.globalTextInputMaxLength),
    CustomValidators.hasMinimumAmountOfCharactersNotBeingSpacesValidator,
  ]);

  public static standardTextAreaComposition = Validators.compose([
    Validators.required,
    Validators.minLength(this.globalMinLength),
    Validators.maxLength(CustomValidators.globalTextAreaMaxLength),
    CustomValidators.hasMinimumAmountOfCharactersNotBeingSpacesValidator,
  ]);

  public static noWhitespaceValidator(control: AbstractControl) {
    const isValid = (control.value || '').trim().length === 0;
    return !isValid ? null : { whitespace: true };
  }

  public static hasMinimumAmountOfCharactersNotBeingSpacesValidator(
    control: AbstractControl
  ) {
    if (typeof control.value !== 'string') return null;

    const isValid =
      control.touched &&
      control.value?.replaceAll(' ', '').length <
        CustomValidators.globalMinLength;

    return !isValid ? null : { minLengthWithoutSpaces: true };
  }
}
