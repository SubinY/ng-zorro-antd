import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterSelectDemoComponent } from "./master-select-demo.component";

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: MasterSelectDemoComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class MasterSelectDemoRoutingModule { }
