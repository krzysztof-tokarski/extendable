/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '@shared/validation/custom-validators';
import { AppRoute } from '../../routes/app-route.enum';
import { AuthFormValue } from '../models/auth-form-value';
import { AuthFormGroup } from '../models/auth-form.type';
import { AuthService } from '../services/auth.service';
import { SignUpService } from '../services/sign-up.service';

interface Settings {
  header: string;
  buttonText: string;
  alternateLinkQuestion: string;
  alternateLink: string;
  alternateLinkText: string;
  submitCallback: Function;
}

@Component({
  selector: 'extendable-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  // todo proper implementation
  protected form: AuthFormGroup = this.createForm();
  protected currentSetting!: Settings;
  private settingsMap = new Map<AppRoute, Settings>([
    [
      AppRoute.AUTH_SIGN_IN,
      {
        header: 'Sign in',
        buttonText: 'Sign in',
        alternateLinkQuestion: 'Don’t have an account?',
        alternateLink: '/auth/sign-up',
        alternateLinkText: 'Sign up',
        submitCallback: () =>
          this.authService.signIn(this.prepareFormForSubmit()),
      },
    ],
    [
      AppRoute.AUTH_SIGN_UP,
      {
        header: 'Sign up',
        buttonText: 'Sign up',
        alternateLinkQuestion: 'Already signed up?',
        alternateLink: '/auth/sign-in',
        alternateLinkText: 'Sign in',
        submitCallback: () =>
          this.signUpService.processCreateUserAttempt(
            this.prepareFormForSubmit()
          ),
      },
    ],
  ]);

  constructor(
    private fb: NonNullableFormBuilder,
    protected router: Router,
    private authService: AuthService,
    private signUpService: SignUpService
  ) {}

  public ngOnInit(): void {
    this.currentSetting = this.settingsMap.get(
      this.router.url as AppRoute
    ) as Settings;
  }

  // TODO add validators
  private createForm(): AuthFormGroup {
    return this.fb.group({
      email: this.fb.control('', {
        validators: CustomValidators.standardTextInputComposition,
      }),
      password: this.fb.control('', {
        validators: CustomValidators.standardTextInputComposition,
      }),
    });
  }

  private prepareFormForSubmit(): AuthFormValue {
    const { email, password } = this.form.value;

    return { email: email?.toLowerCase(), password } as AuthFormValue;
  }

  protected processSubmit() {
    this.currentSetting.submitCallback();
  }
}
