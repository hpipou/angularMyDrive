import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MydriveServiceService } from 'src/app/service/mydrive-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  errorAlert = false
  errorMessage = ''
  myForm!: FormGroup;

  constructor(
      private fb: FormBuilder,
      private DriveService:MydriveServiceService,
      private route:Router
      ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5)
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5)
      ]],
    });
  }

  onSubmit() {

    this.DriveService.register(this.myForm.value).subscribe(
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

                        }).unsubscribe

  }

  ngOnDestroy(): void {

  }

}
