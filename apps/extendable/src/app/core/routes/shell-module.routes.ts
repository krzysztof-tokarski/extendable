import { Route } from '@angular/router';
import { ShellWrapperComponent } from '@core/shell/shell-wrapper/shell-wrapper.component';

export const shellModuleRoutes: Route[] = [
  {
    path: '',
    component: ShellWrapperComponent,
    children: [
      {
        path: 'today',
        loadChildren: async () =>
          (await import('@features/todos/today/today.module')).TodayModule,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'today',
      },
      {
        path: '**',
        redirectTo: 'today',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
