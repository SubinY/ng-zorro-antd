import {
  Component,
  Input,
  OnInit,
  NgModule,
  ContentChild,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIGridComponent } from './ui-grid.component';


@Component({
  selector: 'grid-icon',
  template: `
    <ng-container></ng-container>
  `,
  styles: []
})
export class GridIconComponent {
  
  @ContentChild('iconTemplate') iconTemplate: TemplateRef<any>;
  @Input() outField = '';
  @Input() outProp = '';

  constructor() { }

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GridIconComponent
  ],
  exports: [GridIconComponent]
})
export class GridIconModule { }