import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { YztDemoAreaSelectComponent } from './yzt-demo-area-select.component';

@NgModule({
	imports: [ RouterModule.forChild([
	  { path: '', component: YztDemoAreaSelectComponent }
	]) ],
	exports: [ RouterModule ]
  })
  export class YztDemoAreaSelectRoutingModule {
  }
  