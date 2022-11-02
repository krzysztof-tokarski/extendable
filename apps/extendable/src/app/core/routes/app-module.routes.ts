import { Route } from '@angular/router';

export const appModuleRoutes: Route[] = [
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
    redirectTo: 'app',
  },
  {
    path: '**',
    redirectTo: 'app',
  },
  // TODO change redirects to auth or 404
];
