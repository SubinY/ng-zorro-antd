export interface ColumnInter {
    field: string;
    [propName:string]:any;
}

import { Injectable } from "@angular/core";

@Injectable()
export class GridUtilService {
    /**
     * 关键字数组分解成含'|'的字符串
     * @param arr 分解的数组
     */
    generateColumnKey(columns: Array<ColumnInter>): string {
        let fields = [];
        for (let column of columns) {
            fields.push(column.field);
        }
        fields.sort();
        let key = "";
        for (let field of fields) {
            if (key.length > 0) {
                key += "|";
            }
            key += field;
        }
        return key;
    }
}
