import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-grid-basic',
  template: `
    <ui-grid [data]="data" [columns]="columns" mulitipy="true" (load)="load($event)"></ui-grid>
  `,
  styles: [`
    :host ::ng-deep .ant-table-thead > tr > th.ant-table-selection-column, :host ::ng-deep .ant-table-tbody > tr > td.ant-table-selection-column {
        width: 30px;
        min-width: 30px;
    }
  `]
})
export class UIGridBasicComponent implements OnInit {
  data = {};
  columns = [];
  columnsHeader: any[] = [
    "ID-id",
    "简称-name-120px",
    "全称-fullName-200px",
    "代码-code-150px"
  ];
  ngOnInit() {
    for (let i = 0; i < this.columnsHeader.length; i++) {
      let arr = this.columnsHeader[i].split('-');
      this.columns[i] = {};
      Object.assign(this.columns[i],
        {
          header: arr[0],
          field: arr[1],
          width: arr[2]
        });
    }
  }

  load(page) {
    fetch('/assets/simulate-data/data.json', { method: 'get' }).then(result => result.json())
      .then(data => {
        this.data = data;
      })
  }

}


