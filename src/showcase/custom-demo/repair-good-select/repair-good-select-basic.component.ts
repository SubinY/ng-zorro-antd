import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'repair-good-select-basic',
  template: `
    <yzt-repair-goods  [(ngModel)]="value"></yzt-repair-goods>
    <button  nz-button  [nzType]="'primary'" (click)="handle()">获取维修品名ID</button>
  `,
  styles  : []
})
export class RepairGoodSelectBasicComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
    this._message.create('info', `值为：${this.value}`);
  }
}


