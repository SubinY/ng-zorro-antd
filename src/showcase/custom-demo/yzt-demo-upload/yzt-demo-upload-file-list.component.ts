import { Component } from '@angular/core';

@Component({
  selector: 'yzt-demo-upload-filelist',
  template: `
  <yzt-upload [(fileList)]="fileList" (onChange)="onChange($event)">
  </yzt-upload>
  `
})
export class YztDemoUploadFileListComponent {
  fileList = [{
    id: '',
    name: 'xxx.png',
    url: 'http://yztfile.gz.bcebos.com/WFzyzwyd0lUqe6AE.png',
  }, {
    id: 'WFzy0wyd0lUqe6AF',
    name: 'yyy.png',
    url: 'http://yztfile.gz.bcebos.com/WFzy0wyd0lUqe6AF.png',
  }, {
    id: 'WFz9Qjud0lUqe6AY',
    name: 'ag.jpg',
    url: 'http://yztfile.gz.bcebos.com/WFz9Qjud0lUqe6AY.jpg',
  }];

  onChange = $event => {
   
    console.log( this.fileList);
  }
}
