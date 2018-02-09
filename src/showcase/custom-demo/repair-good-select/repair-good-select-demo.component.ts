import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector     : 'repair-good-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './repair-good-select-demo.html',
  styleUrls    : [
    './repair-good-select-demo.less',
  ]
})
export class RepairGoodSelectDemoComponent {
  RepairGoodSelectBasicCode = require('!!raw-loader!./repair-good-select-basic.component');
  RepairGoodSelectMultipleCode = require('!!raw-loader!./repair-good-select-multiple.component');
  RepairGoodSelectTemplateCode = require('!!raw-loader!./repair-good-select-template.component');
}