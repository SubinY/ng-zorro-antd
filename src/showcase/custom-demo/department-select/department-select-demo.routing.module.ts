import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentSelectDemoComponent } from './department-select-demo.component';


@NgModule({
    imports: [ RouterModule.forChild([
      { path: '', component: DepartmentSelectDemoComponent }
    ]) ],
    exports: [ RouterModule ]
  })
export class DepartmentSelectDemoRoutingModule { }
