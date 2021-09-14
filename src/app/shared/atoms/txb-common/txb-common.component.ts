import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-txb-common',
  templateUrl: './txb-common.component.html',
  styleUrls: ['./txb-common.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxbCommonComponent extends ButtonBase {
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() content: string = '';
  @Input() maxWidth: string = '100%';
  public get classes(): string[] {
    let _class = this.primary ? 'txb-common--primary' : 'txb-common--secondary';
    let _mode = this.mode;
    return ['txb-common', _class, `txb-common--${_mode}`];
  }
  constructor() {
    super();
  }
  ngOnInit(): void {
  }

}
