import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSourceComponent } from './btn-source.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonUtilitiesModule } from '../../common/common.module';

@NgModule({
  declarations: [BtnSourceComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, CommonUtilitiesModule],
  exports: [BtnSourceComponent]
})
export class BtnSourceModule { }
