import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShipperSelectDemoComponent } from "./shipper-select-demo.component";

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: ShipperSelectDemoComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class ShipperSelectDemoRoutingModule { }
