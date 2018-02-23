import { Component, OnInit } from '@angular/core';
import { NzMessageService } from '../../../../index.showcase';

@Component({
  selector: 'repair-good-select-template',
  template: `
    <yzt-repair-goods [(ngModel)]="value" [customTemplate]="content" width="200px" [valueType]="'object'">
      <ng-template #content let-name="name">
        <div class="wrap">
          <span class="font-style">{{name}}</span>
        </div>
      </ng-template>
    </yzt-repair-goods>
    <button nz-button  [nzType]="'primary'"  (click)="handle()">获取维修品名对象</button>
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
export class RepairGoodSelectTemplateComponent implements OnInit {
  value = "";
  constructor(private _message: NzMessageService){}
  ngOnInit() {

  }
  handle() {
    console.log(this.value);
    this._message.create('info', `值为：${this.value}`);
  }
}


