import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCommentComponent } from './tab-comment.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonUtilitiesModule } from '../../common/common.module';


@NgModule({
  declarations: [
    TabCommentComponent
  ],
  imports: [
    CommonModule,
    CommonUtilitiesModule,
    MatTabsModule,
    ImgAvatarModule,
    BtnCommonModule,
    TxbCommonModule,
    IvyCarouselModule,
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [TabCommentComponent]
})
export class TabCommentModule { }
