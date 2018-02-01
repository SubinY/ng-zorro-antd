import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector     : 'echarts-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './echarts-demo.html',
  styleUrls    : [
    './echarts-demo.css',
  ]
})
export class EchartsDemoComponent implements OnInit {
  EchartsDemoMapComponent = require('!!raw-loader!./echarts-demo-map.component');
  EchartsDemoBarComponent = require('!!raw-loader!./echarts-demo-bar.component');
  EchartsDemoOptionsComponent = require('!!raw-loader!./echarts-demo-options.component');
  EchartsDemoPieComponent = require('!!raw-loader!./echarts-demo-pie.component');
  EchartsDemoClickComponent = require('!!raw-loader!./echarts-demo-click.component');
  EchartsDemoLineComponent = require('!!raw-loader!./echarts-demo-line.component');

  constructor() {
  }

  ngOnInit() {
  }
}

