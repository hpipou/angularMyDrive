import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProfilModule } from './profil/profil.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MydriveModule } from './mydrive/mydrive.module';
import { UploadfileModule } from './uploadfile/uploadfile.module';
import { LogoutModule } from './logout/logout.module';
import { EditprofilModule } from './editprofil/editprofil.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    ProfilModule,
    MydriveModule,
    UploadfileModule,
    LogoutModule,
    EditprofilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
