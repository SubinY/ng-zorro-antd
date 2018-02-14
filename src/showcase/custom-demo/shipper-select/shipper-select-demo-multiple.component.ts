import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'shipper-select-demo-multiple',
    template: `
    <yzt-shipper [(ngModel)]="value" [OptionMode]="'multiple'"></yzt-shipper>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取发货人编号数组</button>
  `,
    styles: []
})
export class ShipperSelectDemoMultipleComponent implements OnInit {
    value: any[] = [];
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }
    handle() {
        this._message.info("发货人编号数组为："+this.value);
    }

}
