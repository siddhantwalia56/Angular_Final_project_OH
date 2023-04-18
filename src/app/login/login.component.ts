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
  constructor(private router: Router, private login_service: LoginService){
    if(login_service.userid){
      router.navigateByUrl('todo')
      alert('You are already logged in')
    }

  }
loginForm= new FormGroup({
  user: new FormControl(''),
  password: new FormControl(''),
})
username: any ;
password: any ;

apiData:any
  errorMessage: string | undefined;
loginform(){
  this.login_service.login(this.username,this.password)
  .subscribe((response:any)=>{
    console.log(response)
    this.login_service.user=response
    this.login_service.userid=response.id
    this.router.navigateByUrl('todo')
  },
  error =>{
    if(error.status === 400){
      this.errorMessage = 'Invalid username or password'
    }
    else{
      this.errorMessage = 'An error occured. Please try again'
    }
  }
  )
}
}
