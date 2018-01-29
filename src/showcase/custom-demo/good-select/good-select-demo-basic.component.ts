import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'good-select-demo-basic',
  template: `
    <good-select [(ngModel)]="value"></good-select>
    <button (click)="handle()">获取品名ID</button>
  `,
  styles  : []
})
export class GoodSelectDemoBasicComponent implements OnInit {
  value = "";
  ngOnInit() {

  }

  handle() {
    console.log(this.value)
  }
}


