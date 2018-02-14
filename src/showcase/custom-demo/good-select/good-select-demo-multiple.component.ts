import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'good-select-demo-multiple',
  template: `
    <good-select [(ngModel)]="value" [goodMode]="'multiple'"></good-select>
    <button nz-button  [nzType]="'primary'"  (click)="handle()">获取品名ID数组</button>
  `,
  styles  : []
})
export class GoodSelectDemoMultipleComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
    this._message.create('info', `值为：${this.value}`);
  }
}


