import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector     : 'good-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './good-select-demo.html',
  styleUrls    : [
    './good-select-demo.less',
  ]
})
export class GoodSelectDemoComponent {
  GoodSelectDemoBasicCode = require('!!raw-loader!./good-select-demo-basic.component');
  GoodSelectDemoMultipleCode = require('!!raw-loader!./good-select-demo-multiple.component');
  GoodSelectDemoTemplateCode = require('!!raw-loader!./good-select-demo-template.component');
}
