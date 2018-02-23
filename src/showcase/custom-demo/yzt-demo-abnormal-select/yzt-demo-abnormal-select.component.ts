import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector     : 'yzt-demo-abnormal-select',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './yzt-demo-abnormal-select.html'
})
export class YztDemoAbnormalSelectComponent implements OnInit {
  YztDemoAbnormalSelectBasicDemoCode = require('!!raw-loader!./yzt-demo-abnormal-select-basic.component');

  constructor() {
  }

  ngOnInit() {
  }
}

