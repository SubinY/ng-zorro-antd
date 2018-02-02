import {
  Component,
  Input,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector     : 'grid-icon',
  template     : `
    <img *ngIf="field=='taskId' && data['tmail']" src="/assets/custom-img/mao-order.png" alt="天猫订单" width="15" />
    <a *ngIf="field=='abnormalNum' && data['lock']" href="javascript:void(0);" title="锁定" class="operation-a operation-lock"><i></i></a>
    <a *ngIf="field=='abnormalNum' && !data['lock']" href="javascript:void(0);" title="未锁定" class="operation-a operation-unlock"><i></i></a>
  `,
  styles   : [`
    .column-link{
      text-decoration:underline;
      color: rgba(0, 0, 0,0.65);
    }

    a.operation-a {
      display: inline-block;
      height: 38px;
      line-height: 38px;
      text-align: left;
      color: #728597;
    }
    a.operation-a>i {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
    }
    a.operation-unlock>i {
      background: url(/assets/custom-img/operation.png) no-repeat -1px -120px;
      background-size: 122px;
    }
    a.operation-lock>i {
      background: url(/assets/custom-img/operation.png) no-repeat 0px -49px;
      background-size: 122px;
    }
  `]
})
export class GridIconComponent {

  @Input() field = '';
  @Input() data = {};

  constructor() {}

  ngOnInit() {}

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