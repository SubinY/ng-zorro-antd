import { Component, OnInit } from '@angular/core';
import { NzMessageService } from "../../../components/ng-zorro-antd.module";

@Component({
    selector: 'shipper-select-demo-template',
    template: `
     <shipper-select [(ngModel)]="value" [customTemplate]="content"  [valueType]="'object'">
      <ng-template #content let-name="name" let-idBak="idBak">
        <div class="wrap">
          <span class="font-style border-right">{{name}}</span>
          <span class="font-style">{{idBak}}</span>
        </div>
      </ng-template>
    </shipper-select>
    <button nz-button [nzType]="'primary'" (click)="handle()">获取发货人编号</button>
  `,
    styles: [`
        .border-right{
            border-right:1px solid #ECECEC;
            padding-right: 10px;
            margin-right: 10px; 
        }
    `]
})
export class ShipperSelectDemoTemplateComponent implements OnInit {
    value: any;
    constructor(private _message: NzMessageService) { }

    ngOnInit() {
    }
    handle() {
        this._message.info('获取发货人编号为:'+this.value);
    }

}
