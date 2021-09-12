import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-btn-common',
  templateUrl: './btn-common.component.html',
  styleUrls: ['./btn-common.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnCommonComponent extends ButtonBase {
  public get classes(): string[] {
    return [
      'btn-common',
      `btn-common--${this.size}`,
      `btn-common--${this.mode}`,
    ];
  }
  constructor() {
    super();
  }
}
