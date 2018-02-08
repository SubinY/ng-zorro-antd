// tslint:disable
import { Component } from '@angular/core';
import { NzMessageService } from '../../../components/message/nz-message.service';
import { UploadFile } from '../../../components/upload/interface';

@Component({
  selector: 'yzt-demo-upload-picture-style',
  template: `
  <div class="clearfix">
    <yzt-upload type="picture" [fileNum]="4" [(fileList)]="fileList1" (onChange)="onChange($event)"> </yzt-upload>
  </div>
  {{fileList1 | json}}

    <br><br>

  <div class="clearfix">
    
  <yzt-upload type="picture-inline"  [(fileList)]="fileList2"> </yzt-upload>
   
  </div>
  `,
  styles: [`
 
  `]
})
export class YztDemoUploadPictureStyleComponent {
  defaultFileList = [{
    id: 'WFzy0wyd0lUqe6AF',
    name: 'yyy.png',
    url: 'http://yztfile.gz.bcebos.com/WFzy0wyd0lUqe6AF.png',
  }, {
    id: 'WFz9Qjud0lUqe6AY',
    name: 'ag.jpg',
    url: 'http://yztfile.gz.bcebos.com/WFz9Qjud0lUqe6AY.jpg',
  }];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  constructor(private msg: NzMessageService) { }

  onChange = $event => {
    console.log(this.fileList1);
  }
}
