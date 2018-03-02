import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaSelectDemoRoutingModule } from './meta-select-demo.routing.module';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { MetaSelectDemoComponent } from './meta-select-demo.component';
import { NzCodeBoxModule } from '../../share/nz-codebox/nz-codebox.module';
import { YztCustomModule } from '../../../custom-components/yzt-custom.module';
import { MetaSelectDemoBasicComponent } from './meta-select-demo-basic.component';

@NgModule({
    imports: [MetaSelectDemoRoutingModule,CommonModule, NzCodeBoxModule, YztCustomModule, FormsModule, JsonpModule],
    declarations: [MetaSelectDemoComponent,MetaSelectDemoBasicComponent]
})
export class MetaSelectDemoModule { }
