import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCommonComponent } from './btn-common.component';



@NgModule({
  declarations: [
    BtnCommonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BtnCommonComponent]
})
export class BtnCommonModule { }
