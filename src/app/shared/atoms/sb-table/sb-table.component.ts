import { Component, Input, OnInit } from '@angular/core';
import { ButtonBase } from '../btn-base';

@Component({
  selector: 'app-sb-table',
  templateUrl: './sb-table.component.html',
  styleUrls: ['./sb-table.component.scss'],
})
export class SbTableComponent extends ButtonBase {
  @Input()
  maxWidth = '100%';

  public get classes(): string[] {
    return ['sb-table-name', `sb-table-name--${this.mode}`, `sb-table-name--${this.primary}`];
  }

  constructor() {
    super();
  }

  ngOnInit(): void { }
}
