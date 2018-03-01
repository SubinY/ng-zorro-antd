import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CitySelectDemoComponent} from './city-select-demo.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: CitySelectDemoComponent}
  ])],
  exports: [RouterModule]
})
export class CitySelectDemoRoutingModule {
}
