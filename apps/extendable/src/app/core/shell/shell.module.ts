import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWrapperComponent } from './shell-wrapper/shell-wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellWrapperComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export class ShellModule {}
