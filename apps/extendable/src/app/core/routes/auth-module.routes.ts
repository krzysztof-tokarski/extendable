import { Route } from '@angular/router';
import { AuthWrapperComponent } from '@core/auth/auth-wrapper/auth-wrapper.component';

export const authModuleRoutes: Route[] = [
  {
    path: '',
    title: 'Log in to Extendable',
    component: AuthWrapperComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
