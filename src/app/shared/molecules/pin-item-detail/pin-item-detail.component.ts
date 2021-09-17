import { Component, Input, OnInit } from '@angular/core';
import { ButtonBase } from '../../atoms/btn-base';
import { PinAuthor } from '../../model/pin-author.model';
import { PinInfo } from '../../model/pin-info.model';

@Component({
  selector: 'app-pin-item-detail',
  templateUrl: './pin-item-detail.component.html',
  styleUrls: ['./pin-item-detail.component.scss']
})
export class PinItemDetailComponent extends ButtonBase {

  @Input()
  pinInfo: PinInfo | null = null;

  @Input()
  author: PinAuthor | null = null;

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
