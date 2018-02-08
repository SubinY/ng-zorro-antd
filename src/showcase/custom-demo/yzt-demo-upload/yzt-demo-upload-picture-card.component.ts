// tslint:disable
import { Component } from '@angular/core';

@Component({
  selector: 'yzt-demo-upload-picture-card',
  template: `
  <div class="clearfix">
    <yzt-upload type='picture-card' [(fileList)]="fileList" [fileNum]="4"></yzt-upload>
  </div>
  `
})
export class YztDemoUploadPictureCardComponent {
  fileList = [ {
    id: 'WF0HyLqd0lUqe6Ah',
    name: 'yyy.png',
    url: 'http://yztfile.gz.bcebos.com/WF0HyLqd0lUqe6Ah.png',
  }];
}
