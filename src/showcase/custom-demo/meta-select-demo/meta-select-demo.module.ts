import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaSelectDemoRoutingModule } from './meta-select-demo.routing.module';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { MetaSelectDemoComponent } from './meta-select-demo.component';
import { NzCodeBoxModule } from '../../share/nz-codebox/nz-codebox.module';
import { MetaSelectDemoBasicComponent } from './meta-select-demo-basic.component';
import { YztCustomModule } from '../../../custom-components/public_api';

@NgModule({
    imports: [MetaSelectDemoRoutingModule,CommonModule, NzCodeBoxModule, YztCustomModule, FormsModule, JsonpModule],
    declarations: [MetaSelectDemoComponent,MetaSelectDemoBasicComponent]
})
export class MetaSelectDemoModule { }
