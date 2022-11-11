import { Route } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { LoggedInGuard } from '@core/guards/logged-in.guard';

export const appModuleRoutes: Route[] = [
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: async () =>
      (await import('@core/shell/shell.module')).ShellModule,
  },
  {
    path: 'auth',
    canActivate: [LoggedInGuard],
    loadChildren: async () =>
      (await import('@core/auth/auth.module')).AuthModule,
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
];
