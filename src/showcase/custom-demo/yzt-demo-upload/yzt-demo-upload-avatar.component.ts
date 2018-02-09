// tslint:disable
import { Component } from '@angular/core';
import { NzMessageService } from '../../../components/message/nz-message.service';
import { UploadFile } from '../../../components/upload/interface';

@Component({
  selector: 'yzt-demo-upload-avatar',
  template: `
  <yzt-upload type="avatar"  [(fileList)]="fileList" [beforeUpload]="beforeUpload" [fileSize]="200"></yzt-upload>
  `
})
export class YztDemoUploadAvatarComponent {

  fileList: any[]

  constructor(private msg: NzMessageService) { }

  beforeUpload = (file: File) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

}
