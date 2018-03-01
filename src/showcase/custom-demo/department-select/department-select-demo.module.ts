import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YztCustomModule } from '../../../custom-components/yzt-custom.module';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NzCodeBoxModule } from '../../share/nz-codebox/nz-codebox.module';
import { DepartmentSelectDemoBasicComponent } from './department-select-demo-basic.component';
import { DepartmentSelectDemoComponent } from './department-select-demo.component';
import { DepartmentSelectDemoRoutingModule } from './department-select-demo.routing.module';
import { DepartmentSelectDemoValueTypeComponent } from './department-select-demo-valueType.component';

@NgModule({
    imports: [DepartmentSelectDemoRoutingModule,CommonModule, NzCodeBoxModule, YztCustomModule, FormsModule, JsonpModule],
    declarations: [DepartmentSelectDemoComponent, DepartmentSelectDemoBasicComponent,DepartmentSelectDemoValueTypeComponent]
})
export class DepartmentSelectDemoModule { }
