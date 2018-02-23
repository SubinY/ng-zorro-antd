import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'yzt-demo-area-select-basic',
  template: `
  <yzt-area [(ngModel)]="areaCode" [label]="defaultLabel"></yzt-area>
  <br><br><p>回显{{areaCode1}}</p>
  <yzt-area [(ngModel)]="areaCode1"></yzt-area>
  `,
  styles: [`
      
  `]
})
export class YztAreaSelectBasicDemoComponent {
  areaCode: any;
  areaCode1 = '440106000000';
  defaultLabel: '请选择…';
}
