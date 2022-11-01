import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayWrapperComponent } from './today-wrapper/today-wrapper.component';
import { RouterModule } from '@angular/router';
import { todayModuleRoutes } from '@core/routes/today-module.routes';

@NgModule({
  declarations: [TodayWrapperComponent],
  imports: [CommonModule, RouterModule.forChild(todayModuleRoutes)],
})
export class TodayModule {}
