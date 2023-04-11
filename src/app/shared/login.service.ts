import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
//  baseUrl='https//dummyjson.com';
  constructor(private router: Router, private http: HttpClient ) { }
  userid:any
  login(user: any,password:any):Observable<any>{
    console.log(user)
    console.log(password)
    const body= JSON.stringify({user,password})
    return this.http.post<any>('https://dummyjson.com/auth/login',body)
      }



















    // const url = `${this.baseUrl}${path}`;
    // const headers  = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
//     fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({

//     username: user,
//     password: password,
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(data=> {

//   if(data.username==user){
//     this.userid=data.id
//   this.router.navigateByUrl('todo')
// }
// else{
//   alert('Username or Password is wrong')
// }
// });


// login(user: any,password:any){
//   fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({

//       username: user,
//       password: password,
//       // expiresInMins: 60, // optional
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);
// }
}
