import { Route } from '@angular/router';
import { AuthFormComponent } from '@core/auth/auth-form/auth-form.component';

enum AuthModuleRoutes {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
}

export const authModuleRoutes: Route[] = [
  {
    path: AuthModuleRoutes.SIGN_IN,
    title: 'Log in to Extendable',
    component: AuthFormComponent,
  },
  {
    path: AuthModuleRoutes.SIGN_UP,
    title: 'Sign up to Extendable',
    component: AuthFormComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AuthModuleRoutes.SIGN_IN,
  },
  {
    path: '**',
    redirectTo: AuthModuleRoutes.SIGN_IN,
  },
];
