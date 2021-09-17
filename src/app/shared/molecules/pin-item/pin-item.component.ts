import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ButtonBase } from '../../atoms/btn-base';
import { PinAuthor } from '../../model/pin-author.model';
import { PinInfo } from '../../model/pin-info.model';

@Component({
  selector: 'app-pin-item',
  templateUrl: './pin-item.component.html',
  styleUrls: ['./pin-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PinItemComponent extends ButtonBase {


  @Input()
  pinInfo: PinInfo | null = null;

  @Input()
  author: PinAuthor | null = null;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
