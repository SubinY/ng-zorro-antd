import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'master-select-demo-basic',
    template: `
    <master-select [(ngModel)]="value"></master-select>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取师傅对象</button>
  `,
    styles: []
})
export class MasterSelectDemoBasicComponent implements OnInit {
    value: string = "";
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('师傅对象值为：'+this.value);
        console.log(this.value)
    }

}
