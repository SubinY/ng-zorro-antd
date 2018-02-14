import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector     : 'yzt-demo-upload',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './yzt-demo-upload.html'
})
export class YztDemoUploadComponent {
  YztDemoUploadBasicCode = require('!!raw-loader!./yzt-demo-upload-basic.component');
  YztDemoUploadAvatarCode = require('!!raw-loader!./yzt-demo-upload-avatar.component');
  YztDemoUploadFileListCode = require('!!raw-loader!./yzt-demo-upload-file-list.component');
  YztDemoUploadPictureCardComponentCode = require('!!raw-loader!./yzt-demo-upload-picture-card.component');
  YztDemoUploadFilterComponentCode = require('!!raw-loader!./yzt-demo-upload-filter.component');
  YztDemoUploadPictureStyleComponentCode = require('!!raw-loader!./yzt-demo-upload-picture-style.component');
  YztDemoUploadDragComponentCode = require('!!raw-loader!./yzt-demo-upload-drag.component');
  YztDemoUploadManuallyComponentCode = require('!!raw-loader!./yzt-demo-upload-manually.component');

  changeDEMO = `
  {
    file: { /* ... */ },
    fileList: [ /* ... */ ],
    event: { /* ... */ },
  }
  `;
  uploadFileDEMO = `
  {
    uid: 'uid',      // 文件唯一标识
    name: 'xx.png'   // 文件名
    status: 'done', // 状态有：uploading done error removed
    response: '{"status": "success"}' // 服务端响应内容
 }`;
}
