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
    console.log(username)
    console.log(password)
    const url ='https://dummyjson.com/auth/login'
    const body= {username,password}
     return this.http.post(url,body)

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
