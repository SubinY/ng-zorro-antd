// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { ModuleWithProviders, NgModule } from '@angular/core';

// Modules
import { GoodSelectModule } from './good-select/good-select.component';
import { NgZorroAntdModule } from '../components/ng-zorro-antd.module';
import { EchartsModule } from './echarts/echarts.component';
import { UIGridModule } from './ui-grid/ui-grid.component';
import { ShipperSelectModule } from "./shipper-select/shipper-select.component";
import { YztUploadModule } from './upload/yzt-upload.module';

// Services

// Tokens (eg. global services' config)
import { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------
// interface
export * from './upload/interface';

// Modules
export { YztUploadModule } from './upload/yzt-upload.module';
// Components

// Services

// Tokens (eg. global services' config)
export { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    NgZorroAntdModule,
    GoodSelectModule,
    EchartsModule,
    UIGridModule,
    ShipperSelectModule,
    YztUploadModule
  ]
})
export class YztCustomModule {

  static forRoot(options?: NzRootConfig): ModuleWithProviders {
    return {
      ngModule: YztCustomModule,
      providers: [
        // Services
      ]
    };
  }
}
