import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RepairGoodSelectDemoComponent } from './repair-good-select-demo.component';

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: RepairGoodSelectDemoComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class RepairGoodSelectRoutingModule {
}
