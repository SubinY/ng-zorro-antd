import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CneeSelectDemoComponent } from "./cnee-select-demo.component";

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: CneeSelectDemoComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class CneeSelectDemoRoutingModule { }
