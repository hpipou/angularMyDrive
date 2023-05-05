import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

const routes: Routes = [
  {path:'', component:UploadfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadfileRoutingModule { }
