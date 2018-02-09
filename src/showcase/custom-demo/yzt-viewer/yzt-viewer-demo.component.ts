import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector     : 'yzt-viewer-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './yzt-viewer-demo.html'
})
export class YZTViewerDemoComponent implements OnInit {
  YZTViewerBasicDemoCode = require('!!raw-loader!./yzt-viewer-basic-demo.component');

  constructor() {
  }

  ngOnInit() {
  }
}

