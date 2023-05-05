import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydriveRoutingModule } from './mydrive-routing.module';
import { MydriveComponent } from './mydrive/mydrive.component';


@NgModule({
  declarations: [
    MydriveComponent
  ],
  imports: [
    CommonModule,
    MydriveRoutingModule
  ]
})
export class MydriveModule { }
