import {
  ChangeDetectionStrategy, Component
} from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-btn-circle-icon',
  templateUrl: './btn-circle-icon.component.html',
  styleUrls: ['./btn-circle-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnCircleIconComponent extends ButtonBase {
  public get classes(): string[] {
    const size = `btn-circle-icon--${this.size}`;
    const mode = `btn-circle-icon--${this.mode}`;
    const toggle = this.toggle ? `btn-circle-icon--toggle` : '';
    return ['btn-circle-icon', size, mode, toggle];
  }

  constructor() {
    super();
    this.mode = '';
  }
}
