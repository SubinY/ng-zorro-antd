import { Component, OnInit } from '@angular/core';

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
    <button (click)="handle()">获取发货人编号</button>
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
    constructor() { }

    ngOnInit() {
    }
    handle() {
        console.log(this.value);
    }

}
