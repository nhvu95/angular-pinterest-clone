import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BtnCircleIconModule } from '../../atoms/btn-circle-icon/btn-circle-icon.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ImgAvatarModule,
    BtnCommonModule,
    BtnCircleIconModule,
    TxbCommonModule
  ]
})
export class HeaderModule { }
