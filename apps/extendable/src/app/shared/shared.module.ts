import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_IMPORTS = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_IMPORTS],
  exports: [MATERIAL_IMPORTS],
})
export class SharedModule {}
