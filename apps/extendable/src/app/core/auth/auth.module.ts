import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { RouterModule } from '@angular/router';
import { authModuleRoutes } from '@core/routes/auth-module.routes';

@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [CommonModule, RouterModule.forChild(authModuleRoutes)],
})
export class AuthModule {}
