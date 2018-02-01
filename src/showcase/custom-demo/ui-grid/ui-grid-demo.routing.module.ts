import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIGridDemoComponent } from './ui-grid-demo.component';

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: UIGridDemoComponent }
  ]) ],
  exports: [ RouterModule ]
})
export class UIGridDemoRoutingModule {
}
