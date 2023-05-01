import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo_list:any[]=[]
  todo_index:any
todo_data:any
  constructor(private http:HttpClient, private login_service: LoginService) { }
  todo(id:any):Observable<any>{
    return this.http.get('https://dummyjson.com/todos/user/'+id)
   }
   edit_task(taskid:number,updated_task:any,status:any){
    console.log(status)
    const body={
      todo:updated_task,
      completed:status
    }
    return this.http.put('https://dummyjson.com/todos/'+taskid,body)
   }

   task_add(new_task:any){
    const body={
      todo:new_task,
      completed: false,
      userId: this.login_service.userid,
    }
    return this.http.post('https://dummyjson.com/todos/add',body)
   }

   delete_task(id: number){
    return this.http.delete('https://dummyjson.com/todos/'+id)
   }
}
