import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'good-select-demo-template',
  template: `
    <yzt-good [(ngModel)]="value" [customTemplate]="content" width="200px" [valueType]="'object'">
      <ng-template #content let-name="name">
        <div class="wrap">
          <span class="font-style">{{name}}</span>
        </div>
      </ng-template>
    </yzt-good>
    <button nz-button  [nzType]="'primary'"  (click)="handle()">获取品名ID</button>
  `,
  styles  : [`
    .wrap {
      border-bottom: 1px solie #ccc;
    }
    .font-style {
      font-size: 20px;
    }
  `]
})
export class GoodSelectDemoTemplateComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }
  handle() {
    console.log(this.value);
    this._message.create('info', `值为：${this.value}`);
  }
}


