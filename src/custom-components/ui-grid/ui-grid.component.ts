import {
    Component,
    OnInit,
    Input,
    NgModule,
    Output,
    EventEmitter,
    TemplateRef,
    Type,
    ComponentFactory,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from '../../../index.showcase';
import { GridUtilService } from './share/grid-util.service';
import { API } from '../services/api';

interface PageData {
    content: Array<any>,
    numberOfElements: number
    [portName: string]: any
}

export interface PageIndexAndSize {
    first: number,
    rows: number
}

@Component({
    selector: `ui-grid`,
    templateUrl: `ui-grid.component.html`,
    styleUrls: [`ui-grid.component.scss`]
})
export class UIGridComponent {

    _data: PageData;
    _dataSet = [];
    _selections = [];
    _loading = false;
    _pagination = true;
    _fixScrollY = 0;
    _title = '';
    _titleTpl: TemplateRef<any>;
    _exportLoading: false;
    //用于存放可选列
    targetColumns: any[] = [];
    //grid表格按钮控制
    buttonGather = {
        showEditColumn: true,
        enableExport: true,
    }
    /**
     * 控制页码
     */
    _first = 1;
    _rows = 10;
    /**
     * 控制多选
     */
    _allChecked = false;
    _indeterminate = false;
    _displayData = [];



    @Input() id: string;
    @Input() columns = [];
    @Input() showSizeChanger = false;
    @Input() pageSizeValues = [10, 30, 50, 100];
    @Input() showTitle = true;
    @Input() mulitipy = false;

    @Input()
    set data(value: PageData) {
        this._loading = false;
        if (!value) return;
        // 手动调用查询，解决分页问题
        // if (value.size) {
        //     this.pageRow = value.size;
        //     this.dt.first = value.number * value.size;
        // }
        let content = value['content'] || [];
        //优化表格重复赋值性能
        for (let row of content) {
            for (let c of [].concat(this.columns).concat(this.targetColumns)) {
                if (c.field && row[c.field] === undefined) {
                    row[c.field] = Object.defineProperty(row, c.field, "");
                }
            }
        }
        this._displayData = value['content'] = content;
        this._data = value;
    }

    get data(): PageData {
        return this._data;
    }

    @Input()
    set fixScroll(height: any) {
        this._fixScrollY = parseInt(height);
    }

    // 设置头部
    @Input()
    set title(value: string | TemplateRef<void>) {
        if (value instanceof TemplateRef) {
            this._titleTpl = value;
        } else {
            this._title = value;
        }
    }

    @Output() load: EventEmitter<any> = new EventEmitter();
    @Output() rowSelect: EventEmitter<any> = new EventEmitter();

    constructor(private util: GridUtilService,
        public _vcr: ViewContainerRef,
        public api: API) { }

    ngOnInit() {
        this.onLazyLoad();
        if (this.id) {
            let columnsMap = localStorage[this.id];
            if (columnsMap) {
                columnsMap = JSON.parse(columnsMap);
                let sourceColumns = columnsMap["sourceColumns"];
                let targetColumns = columnsMap["targetColumns"];
                if (sourceColumns && targetColumns && this.util.generateColumnKey([...sourceColumns, ...targetColumns]) === this.util.generateColumnKey(this.columns)) {
                    this.columns = sourceColumns;
                    this.targetColumns = targetColumns;
                }
            }
        }
    }

    ngAfterViewInit() {
    }

    onLazyLoad(page: PageIndexAndSize = { first: this._first, rows: this._rows }): any {
        this._loading = true;
        this.load.emit(page);
    }

    refreshData(isSize = false) {
        if (isSize) {
            this._first = 1;
        }
        let page = { first: this._first, rows: this._rows };
        this.onLazyLoad(page);
    }

    /**
     * 记录选择事件
     * @param rows
     */
    onRowSelectChange(event: any) {
        this.rowSelect.emit(event);
        return false;
    }
    
    /**
     * 选择checkbox
     */
    refreshStatus() {
        const selections = this._displayData.filter(value => value.checked === true);
        const allChecked = this._displayData.every(value => value.checked === true);
        const allUnChecked = this._displayData.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this._selections = selections;
    }
    
    checkAll(value, data: Array<any>) {
      if (value) {
        this._displayData.forEach(data => {
          data.checked = true;
        });
      } else {
        this._displayData.forEach(data => {
          data.checked = false;
        });
      }
      this.refreshStatus();
    }

}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
    ],
    declarations: [
        UIGridComponent
    ],
    exports: [UIGridComponent]
})
export class UIGridModule { }
