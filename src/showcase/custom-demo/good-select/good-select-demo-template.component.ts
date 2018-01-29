import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'good-select-demo-template',
  template: `
    <good-select [(ngModel)]="value" [customTemplate]="content" width="200px" [valueType]="'object'">
      <ng-template #content let-name="name">
        <div class="wrap">
          <span class="font-style">{{name}}</span>
        </div>
      </ng-template>
    </good-select>
    <button (click)="handle()">获取品名ID</button>
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
  ngOnInit() {

  }
  handle() {
    console.log(this.value)
  }
}


