import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCircleIconComponent } from './btn-circle-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BtnCircleIconComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [],
})
export class BtnCircleIconModule {}
