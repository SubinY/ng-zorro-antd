import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shipper-select-demo-basic',
    template: `
    <shipper-select [(ngModel)]="value"></shipper-select>
    <button (click)="handle()">获取发货人编号</button>
  `,
    styles: []
})
export class ShipperSelectDemoBasicComponent implements OnInit {
    value: string = "";
    constructor() { }

    ngOnInit() {
    }

    handle() {
        console.log(this.value)
    }

}
