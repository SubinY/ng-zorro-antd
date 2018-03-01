import {Component, OnInit} from '@angular/core';
import {NzMessageService} from '../../../../index.showcase';

@Component({
    selector: 'city-select-demo-basic',
    template: `
        <yzt-area-multiple [(ngModel)]="value" (onChange)="change($event)">
        </yzt-area-multiple>

    `,
    styles: []
})
export class CitySelectDemoBasicComponent implements OnInit {
    value: any ;

    ngOnInit() {

    }

    change($event) {
        console.log($event);
        console.log(this.value);
    }


    constructor(public msg: NzMessageService) {
    }

}


