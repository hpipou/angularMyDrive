import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./home/home.module').then(module=> module.HomeModule)
  },
  {
    path:'login',
    loadChildren:()=> import('./login/login.module').then(module=>module.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=> import('./register/register.module').then(module=>module.RegisterModule)
  },
  {
    path:'profil',
    loadChildren:()=> import('./profil/profil.module').then(module=>module.ProfilModule)
  },
  {
    path:'logout',
    loadChildren:()=> import('./logout/logout.module').then(module=>module.LogoutModule)
  },
  {
    path:'edit',
    loadChildren:()=> import('./editprofil/editprofil.module').then(module=>module.EditprofilModule)
  },
  {
    path:'upload',
    loadChildren:()=> import('./uploadfile/uploadfile.module').then(module=>module.UploadfileModule)
  },
  {
    path:'mydrive',
    loadChildren:()=> import('./mydrive/mydrive.module').then(module=>module.MydriveModule)
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
