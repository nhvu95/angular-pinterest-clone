import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LbPinNameComponent } from './lb-pin-name.component';
import { MatIconModule } from '@angular/material/icon';
import { ImgAvatarModule } from '../img-avatar/img-avatar.module';

@NgModule({
  declarations: [LbPinNameComponent],
  imports: [CommonModule, MatIconModule, ImgAvatarModule],
})
export class LbPinNameModule {}
