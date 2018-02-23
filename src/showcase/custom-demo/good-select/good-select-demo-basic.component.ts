import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'good-select-demo-basic',
  template: `
    <yzt-good [(ngModel)]="value"></yzt-good>
    <button  nz-button  [nzType]="'primary'" (click)="handle()">获取品名ID</button>
  `,
  styles  : []
})
export class GoodSelectDemoBasicComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
    this._message.create('info', `值为：${this.value}`);
  }
}


