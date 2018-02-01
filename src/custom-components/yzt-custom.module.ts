// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { ModuleWithProviders, NgModule } from '@angular/core';

// Modules
import { GoodSelectModule } from './good-select/good-select.component';
import { NgZorroAntdModule } from '../components/ng-zorro-antd.module';
import { ShipperSelectModule } from "./shipper-select/shipper-select.component";

// Services

// Tokens (eg. global services' config)
import { NzRootConfig } from '../components/ng-zorro-antd.module';

// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------

// Modules

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
    ShipperSelectModule
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
