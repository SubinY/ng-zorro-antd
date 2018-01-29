import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'good-select-demo-multiple',
  template: `
    <good-select [(ngModel)]="value" [goodMode]="'multiple'"></good-select>
    <button (click)="handle()">获取品名ID数组</button>
  `,
  styles  : []
})
export class GoodSelectDemoMultipleComponent implements OnInit {
  value = "";
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
  }
}


