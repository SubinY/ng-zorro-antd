import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shipper-select-demo-multiple',
    template: `
    <shipper-select [(ngModel)]="value" [shipperMode]="'multiple'"></shipper-select>
    <button (click)="handle()">获取发货人编号数组</button>
  `,
    styles: []
})
export class ShipperSelectDemoMultipleComponent implements OnInit {
    value: any[] = [];
    constructor() { }

    ngOnInit() {
    }
    handle() {
        console.log(this.value);
    }

}
