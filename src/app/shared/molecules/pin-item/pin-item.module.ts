import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinItemComponent } from './pin-item.component';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';
import { SbTableModule } from '../../atoms/sb-table/sb-table.module';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { BtnSourceModule } from '../../atoms/btn-source/btn-source.module';
import { BtnCircleIconModule } from '../../atoms/btn-circle-icon/btn-circle-icon.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonUtilitiesModule } from '../../common/common.module';



@NgModule({
  declarations: [
    PinItemComponent
  ],
  imports: [
    CommonModule,
    CommonUtilitiesModule,
    SbTableModule,
    BtnCommonModule,
    BtnSourceModule,
    BtnCircleIconModule,
    TxbCommonModule,
    MatIconModule,
    ImgAvatarModule
  ]
})
export class PinItemModule { }
