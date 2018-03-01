import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../components/ng-zorro-antd.module';

@Component({
    selector: 'department-select-demo-valueType',
    template: `
    <yzt-department [valueType]="'compayName'"  [(ngModel)]="value"></yzt-department>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取开单网点名称</button>
    `,
    styles: [``]
})
export class DepartmentSelectDemoValueTypeComponent implements OnInit {

    value: string = "";
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('网点名称为：'+this.value);
        console.log(this.value)
    }

}
