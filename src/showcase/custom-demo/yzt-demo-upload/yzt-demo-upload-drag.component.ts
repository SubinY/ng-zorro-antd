// tslint:disable
import { Component } from '@angular/core';

@Component({
  selector: 'yzt-demo-upload-drag',
  template: `
  <yzt-upload type="drag" [fileNum]="fileNum" [(fileList)]="fileList">
  </yzt-upload>
  `,
  styles: [`

  `]
})
export class YztDemoUploadDragComponent {
  fileNum = 3;
  fileList = [];
}
