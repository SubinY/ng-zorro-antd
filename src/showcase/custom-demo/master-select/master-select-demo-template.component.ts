import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'master-select-demo-template',
    template: `
     <master-select [(ngModel)]="value" [customTemplate]="content"  [valueType]="'object'">
      <ng-template #content let-name="realName" let-mobile="mobile">
        <div class="wrap">
          <span class="font-style">{{name}}</span>|<span class="font-style">{{mobile}}</span>
        </div>
      </ng-template>
    </master-select>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取师傅对象</button>
  `,
    styles: []
})
export class MasterSelectDemoTemplateComponent implements OnInit {
    value: any;
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }

    handle() {
        this._message.info('获取师傅对象:'+this.value);
        console.log(this.value);
    }

}
