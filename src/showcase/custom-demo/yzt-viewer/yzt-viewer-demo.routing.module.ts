import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { YZTViewerDemoComponent } from './yzt-viewer-demo.component';

@NgModule({
	imports: [ RouterModule.forChild([
	  { path: '', component: YZTViewerDemoComponent }
	]) ],
	exports: [ RouterModule ]
  })
  export class YZTViewerDemoRoutingModule {
  }
  