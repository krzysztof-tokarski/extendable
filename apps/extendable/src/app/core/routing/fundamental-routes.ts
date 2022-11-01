import { Route } from '@angular/router';

export const fundamentalRoutes: Route[] = [
  {
    title: 'Log in to Extendable',
    path: 'auth',
    loadChildren: async () =>
      (await import('@core/auth/auth.module')).AuthModule,
  },
  {
    path: 'app',
    loadChildren: async () =>
      (await import('@core/shell/shell.module')).ShellModule,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
