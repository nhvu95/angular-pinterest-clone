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
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
