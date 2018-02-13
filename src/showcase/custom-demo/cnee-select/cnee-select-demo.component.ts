import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cnee-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cnee-select-demo.component.html',
  styleUrls: ['./cnee-select-demo.component.less']
})
export class CneeSelectDemoComponent {
    CneeSelectDemoBasicCode = require('!!raw-loader!./cnee-select-demo-basic.component');
    CneeSelectDemoMultipleComponent = require('!!raw-loader!./cnee-select-demo-multiple.component');
    CneeSelectDemoTemplateComponent = require('!!raw-loader!./cnee-select-demo-template.component');

}
