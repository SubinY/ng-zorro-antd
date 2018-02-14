import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YztDemoUploadComponent } from './yzt-demo-upload.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: YztDemoUploadComponent }
  ])],
  exports: [RouterModule]
})
export class YztDemoUploadRoutingModule {
}
