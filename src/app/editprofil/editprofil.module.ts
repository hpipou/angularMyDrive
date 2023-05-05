import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprofilRoutingModule } from './editprofil-routing.module';
import { EditprofilComponent } from './editprofil/editprofil.component';


@NgModule({
  declarations: [
    EditprofilComponent
  ],
  imports: [
    CommonModule,
    EditprofilRoutingModule
  ]
})
export class EditprofilModule { }
