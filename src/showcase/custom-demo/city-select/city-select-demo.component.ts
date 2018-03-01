import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector     : 'city-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './city-select-demo.html',
  styleUrls    : [
    './city-select-demo.less',
  ]
})
export class CitySelectDemoComponent {
  CitySelectDemoBasicCode = require('!!raw-loader!./city-select-demo-basic.component');
  // GoodSelectDemoMultipleCode = require('!!raw-loader!./city-select-demo-multiple.component');
  // GoodSelectDemoTemplateCode = require('!!raw-loader!./city-select-demo-template.component');
}
