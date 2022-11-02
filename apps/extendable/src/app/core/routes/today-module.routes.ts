import { Route } from '@angular/router';
import { TodayWrapperComponent } from '@features/todos/today/today-wrapper/today-wrapper.component';

export const todayModuleRoutes: Route[] = [
  {
    path: '',
    title: 'Today',
    component: TodayWrapperComponent,
  },
];
