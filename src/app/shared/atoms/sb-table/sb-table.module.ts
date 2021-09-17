import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbTableComponent } from './sb-table.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SbTableComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SbTableComponent]
})
export class SbTableModule { }
