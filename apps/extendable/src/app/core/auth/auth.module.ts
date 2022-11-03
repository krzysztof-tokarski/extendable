import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { RouterModule } from '@angular/router';
import { authModuleRoutes } from '@core/routes/auth-module.routes';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthWrapperComponent, AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(authModuleRoutes),
  ],
})
export class AuthModule {}
