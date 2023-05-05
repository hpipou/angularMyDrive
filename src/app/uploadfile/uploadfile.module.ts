import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadfileRoutingModule } from './uploadfile-routing.module';
import { UploadfileComponent } from './uploadfile/uploadfile.component';


@NgModule({
  declarations: [
    UploadfileComponent
  ],
  imports: [
    CommonModule,
    UploadfileRoutingModule
  ]
})
export class UploadfileModule { }
