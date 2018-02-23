import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector     : 'yzt-demo-area-select',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './yzt-demo-area-select.html'
})
export class YztDemoAreaSelectComponent implements OnInit {
  YztDemoAreaSelectBasicDemoCode = require('!!raw-loader!./yzt-demo-area-select-basic.component');

  constructor() {
  }

  ngOnInit() {
  }
}

