import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-btn-source',
  templateUrl: './btn-source.component.html',
  styleUrls: ['./btn-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnSourceComponent extends ButtonBase {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
