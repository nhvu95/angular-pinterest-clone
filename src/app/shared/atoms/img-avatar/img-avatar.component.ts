import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-img-avatar',
  templateUrl: './img-avatar.component.html',
  styleUrls: ['./img-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgAvatarComponent extends ButtonBase {
  @Input()
  imageUrl: string = '';

  public get classes(): string[] {
    return ['img-avatar', `img-avatar--${this.size}`];
  }

  constructor() {
    super();
  }
}
