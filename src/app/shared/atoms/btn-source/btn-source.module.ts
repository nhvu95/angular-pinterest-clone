import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSourceComponent } from './btn-source.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BtnSourceComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class BtnSourceModule {}
