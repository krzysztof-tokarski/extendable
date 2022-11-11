import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_IMPORTS = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_IMPORTS],
  exports: [MATERIAL_IMPORTS],
})
export class SharedModule {}
