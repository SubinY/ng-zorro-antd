import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'master-select-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './master-select-demo.component.html',
  styleUrls: ['./master-select-demo.component.less']
})
export class MasterSelectDemoComponent {
    MasterSelectDemoBasicCode = require('!!raw-loader!./master-select-demo-basic.component');
    MasterSelectDemoValueTypeComponent = require('!!raw-loader!./master-select-demo-valueType.component');
    MasterSelectDemoValueFieldComponent = require('!!raw-loader!./master-select-demo-valueField.component');
    MasterSelectDemoMixtureComponent = require('!!raw-loader!./master-select-demo-mixture.component');
    MasterSelectDemoTemplateComponent = require('!!raw-loader!./master-select-demo-template.component');

}
