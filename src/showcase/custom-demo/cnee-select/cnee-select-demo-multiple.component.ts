import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'cnee-select-demo-multiple',
    template: `
    <yzt-cnee [(ngModel)]="value" [OptionMode]="'multiple'"></yzt-cnee>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取收货人编号数组</button>
  `,
    styles: []
})
export class CneeSelectDemoMultipleComponent implements OnInit {
    value: any[] = [];
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }
    
    handle() {
        this._message.info("收货人编号数组为："+this.value);
    }

}
