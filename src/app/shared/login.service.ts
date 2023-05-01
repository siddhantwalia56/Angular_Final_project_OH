import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient ) { }
  userid:any
  user:any
  login(username: string,password:string){
    const url ='https://dummyjson.com/auth/login'
    const body= {username,password}
     return this.http.post(url,body)

     }
}
