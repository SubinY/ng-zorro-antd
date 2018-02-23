import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'yzt-demo-abnormal-select-basic',
    template: `
  <yzt-abnormal [(ngModel)]="abnormalCode" [label]="defaultLabel"></yzt-abnormal>
  `,
    styles: [`
      
  `]
})
export class YztDemoAbnormalSelecttBasicComponent {
    abnormalCode: any;
    defaultLabel: '请选择…';
}
