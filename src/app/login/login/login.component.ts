import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MydriveServiceService } from 'src/app/service/mydrive-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  errorAlert = false
  errorMessage = ''
  myForm!: FormGroup;
  loginSub!:any

  constructor(
                private fb: FormBuilder,
                private route: Router,
                private DriveService:MydriveServiceService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5)
      ]],
    });
  }

  onSubmit() {
    this.loginSub = this.DriveService.login(this.myForm.value).subscribe(
      (data)=>{
                localStorage.setItem('token', data.token)
                localStorage.setItem('id', data.id)
                localStorage.setItem('role', data.role)
                localStorage.setItem('username', data.username)

                this.route.navigate(['/'])
      },
      (error)=>{
        this.errorAlert = true
        this.errorMessage = error.error.error
      }
    ).unsubscribe


    // envoyer les données au serveur, réinitialiser le formulaire, etc.
  }

  ngOnDestroy(): void {

  }

}
