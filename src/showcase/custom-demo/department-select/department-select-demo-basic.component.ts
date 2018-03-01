import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../components/ng-zorro-antd.module';

@Component({
  selector: 'department-select-demo-basic',
  template: `
  <yzt-department [(ngModel)]="value"></yzt-department>
  <button nz-button [nzType]="'primary'" (click)="handle()">获取开单网点对象</button>
`,
  styles: []
})
export class DepartmentSelectDemoBasicComponent implements OnInit {
    value: string = "";
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('网点对象为：'+this.value);
        console.log(this.value)
    }

}
