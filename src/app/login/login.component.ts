import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
loginForm= new FormGroup({
  user: new FormControl(''),
  password: new FormControl(''),
})
loginform(){
console.log(this.loginForm.value.user)
this.router.navigateByUrl('todo')
}
}
