import { Route } from '@angular/router';
import { AuthFormComponent } from '@core/auth/auth-form/auth-form.component';
import { AuthWrapperComponent } from '@core/auth/auth-wrapper/auth-wrapper.component';

export const authModuleRoutes: Route[] = [
  {
    path: 'register',
    title: 'Log in to Extendable',
    component: AuthFormComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
  {
    path: '**',
    redirectTo: 'register',
  },
];
