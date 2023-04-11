import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todo_data:any
  constructor() { }
//   todo(id:any){
//     fetch('https://dummyjson.com/todos/user/'+id)
// .then(res => res.json())
// .then(data=>{this.todo_data=data.todos});
//   }
}
