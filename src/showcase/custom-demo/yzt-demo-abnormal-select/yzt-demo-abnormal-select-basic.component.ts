import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'yzt-demo-abnormal-select-basic',
  template: `
  <yzt-abnormal [(ngModel)]="abnormalCode" [label]="defaultLabel"></yzt-abnormal>
  <br><br><p>回显</p>
  <yzt-abnormal [(ngModel)]="abnormalCode1"></yzt-abnormal>
  {{abnormalCode1}}
  `,
  styles: [`
      
  `]
})
export class YztDemoAbnormalSelecttBasicComponent {
  abnormalCode: string;
  abnormalCode1 = 'VwQZVsoR0Y2eHAc_';
  defaultLabel: '请选择…';
}
