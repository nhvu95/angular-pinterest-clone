import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinItemDetailComponent } from './pin-item-detail.component';
import { SbTableModule } from '../../atoms/sb-table/sb-table.module';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { BtnSourceModule } from '../../atoms/btn-source/btn-source.module';
import { BtnCircleIconModule } from '../../atoms/btn-circle-icon/btn-circle-icon.module';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';
import { MatIconModule } from '@angular/material/icon';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { CommonUtilitiesModule } from '../../common/common.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PinItemDetailComponent
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
    MatCardModule,
    ImgAvatarModule
  ]
})
export class PinItemDetailModule { }
