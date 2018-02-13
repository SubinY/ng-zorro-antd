import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'cnee-select-demo-basic',
    template: `
    <cnee-select [(ngModel)]="value"></cnee-select>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取收货人编号</button>
  `,
    styles: []
})
export class CneeSelectDemoBasicComponent implements OnInit {
    value: string = "";
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('收货人编号值为：'+this.value);
    }

}
