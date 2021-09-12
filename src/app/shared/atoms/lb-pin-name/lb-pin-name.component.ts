import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-lb-pin-name',
  templateUrl: './lb-pin-name.component.html',
  styleUrls: ['./lb-pin-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbPinNameComponent extends ButtonBase {
  @Input()
  rowDisplay: number = 1;
  constructor() {
    super();
  }
}
