import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todo_data:any
  constructor(private http:HttpClient) { }
  todo(id:any):Observable<any>{
    return this.http.get('https://dummyjson.com/todos/user/'+id)
   }

}
