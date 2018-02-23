import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'yzt-demo-area-select-basic',
    template: `
  <yzt-area [(ngModel)]="areaCode" [label]="defaultLabel"></yzt-area>
  `,
    styles: [`
      
  `]
})
export class YztAreaSelectBasicDemoComponent {
    areaCode: any;
    defaultLabel: '请选择…';
}
