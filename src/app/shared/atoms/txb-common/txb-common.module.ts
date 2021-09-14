import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxbCommonComponent } from './txb-common.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TxbCommonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [TxbCommonComponent]
})
export class TxbCommonModule { }
