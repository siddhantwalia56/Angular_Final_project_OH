import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private login_service: LoginService){}
loginForm= new FormGroup({
  user: new FormControl(''),
  password: new FormControl(''),
})

apiData:any
errorMessage:any
loginform(){
  console.log(this.loginForm.value.user)
  this.login_service.login(this.loginForm.value.user,this.loginForm.value.password)
  .pipe(
    tap(
      (response) => {
        this.apiData = response;
        console.log(this.apiData);
        if (this.apiData) {
          this.errorMessage = false;
          this.router.navigateByUrl('todo')
        }
      },
      (error) => {
        this.errorMessage = true;
        setTimeout(() => {
          this.errorMessage = false;
        }, 3000);
        this.loginForm.reset();

      }
    )
  )
  .subscribe();
  // this.login_service.login(this.loginForm.value.user,this.loginForm.value.password)
  // .subscribe((response:any)=>{
  //   console.log(response)
  //})

// this.router.navigateByUrl('todo')
}
}
