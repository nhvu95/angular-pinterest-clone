import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxbCommonComponent } from './txb-common.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';


@NgModule({
  declarations: [
    TxbCommonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    TextFieldModule
  ],
  exports: [TxbCommonComponent]
})
export class TxbCommonModule { }
