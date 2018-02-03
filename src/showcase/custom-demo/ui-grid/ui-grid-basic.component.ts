import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-grid-basic',
  template: `
    <ui-grid [data]="data" [columns]="columns" [(selection)]="selection" mulitipy="true" (load)="load($event)" (exportCSV)="exportCSV($event)"></ui-grid>
    <button class="operate" nz-button (click)="getSel()">获取选中数据</button>
    <nz-modal [nzVisible]="isVisible" [nzTitle]="'测试数据'" [nzContent]="modalContent" (nzOnCancel)="handleCancel()">
      <ng-template #modalContent>
        <p>{{selection}}</p>
      </ng-template>
    </nz-modal>
  `,
  styles: [`
    .operate {
      margin-top: 10px;
    }
  `]
})
export class UIGridBasicComponent implements OnInit {
  isVisible = false;
  data = {};
  columns = [];
  columnsHeader: any[] = [
    "ID-id--true",
    "简称-name-120px",
    "全称-fullName-200px",
    "代码-code-150px"
  ];
  selection = [];
  ngOnInit() {
    for (let i = 0; i < this.columnsHeader.length; i++) {
      let arr = this.columnsHeader[i].split('-');
      this.columns[i] = {};
      Object.assign(this.columns[i],
        {
          header: arr[0],
          field: arr[1],
          width: arr[2],
          link: arr[3]
        });
    }
  }

  load(page) {
    fetch('/assets/simulate-data/data.json', { method: 'get' }).then(result => result.json())
      .then(data => {
        this.data = data;
      })
  }

  getSel() {
    let tempArr = [];
    this.isVisible = true;
    this.selection.map(v => {
      tempArr.push(JSON.stringify(v));
    })
    this.selection = tempArr;
  }

  handleCancel(){
    this.isVisible = false;;
  }

  exportCSV(e) {
    console.log(e)
  }
}


