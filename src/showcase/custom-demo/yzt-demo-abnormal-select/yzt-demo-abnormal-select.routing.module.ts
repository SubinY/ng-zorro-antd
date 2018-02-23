import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { YztDemoAbnormalSelectComponent } from './yzt-demo-abnormal-select.component';

@NgModule({
	imports: [ RouterModule.forChild([
	  { path: '', component: YztDemoAbnormalSelectComponent }
	]) ],
	exports: [ RouterModule ]
  })
  export class YztDemoAbnormalSelectRoutingModule {
  }
  