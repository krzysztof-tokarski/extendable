import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellWrapperComponent } from './shell-wrapper/shell-wrapper.component';
import { RouterModule } from '@angular/router';
import { shellModuleRoutes } from '@core/routes/shell-module.routes';
import { SharedModule } from '@shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_IMPORTS = [MatToolbarModule, MatSidenavModule, MatMenuModule];

@NgModule({
  declarations: [ShellWrapperComponent],
  imports: [
    MATERIAL_IMPORTS,
    SharedModule,
    CommonModule,
    RouterModule.forChild(shellModuleRoutes),
  ],
})
export class ShellModule {}
