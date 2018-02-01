import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector     : 'ui-grid-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './ui-grid-demo.html',
  styleUrls    : [
    './ui-grid-demo.less',
  ]
})
export class UIGridDemoComponent {
  UIGridBasicCode = require('!!raw-loader!./ui-grid-basic.component');
}
