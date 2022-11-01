import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        title: 'Log in to Extendable',
        component: AuthWrapperComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export class AuthModule {}
