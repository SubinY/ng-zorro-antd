import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { EchartsDemoComponent } from './echarts-demo.component';

@NgModule({
	imports: [ RouterModule.forChild([
	  { path: '', component: EchartsDemoComponent }
	]) ],
	exports: [ RouterModule ]
  })
  export class EchartsDemoRoutingModule {
  }
  