import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'shipper-select-demo-basic',
    template: `
    <shipper-select [(ngModel)]="value"></shipper-select>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取发货人编号</button>
  `,
    styles: []
})
export class ShipperSelectDemoBasicComponent implements OnInit {
    value: string = "";
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('发货人编号值为：'+this.value);
    }

}
