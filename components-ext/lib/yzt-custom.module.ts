// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Services
import { API } from './services/api';

// Directives

// Tokens (eg. global services' config)

// Modules
import { NgZorroAntdModule } from '../../components/ng-zorro-antd.module';
import { AreaDownSelectModule } from './area-down-select/area-down-select.component';
import { ApiService } from './services/api.service';
// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------
// interface

// Modules
export { NgZorroAntdModule } from '../../components/ng-zorro-antd.module';
export { AreaDownSelectModule } from './area-down-select/area-down-select.component';
// Components

// Services

// Tokens (eg. global services' config)

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    NgZorroAntdModule,
    AreaDownSelectModule
  ]
})
export class ZorroExtModule {
  static forRoot(CustomAPI, API_BASE_URL): ModuleWithProviders {
    return {
      ngModule: ZorroExtModule,
      providers: [
        ApiService,
        { provide: API, useClass: CustomAPI },
        { provide: 'API_BASE_URL', useValue: API_BASE_URL }
      ]
    };
  }
}
