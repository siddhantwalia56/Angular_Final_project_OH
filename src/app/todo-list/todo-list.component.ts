import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
constructor(public service: TodoService, private login_service: LoginService, private router:Router){}
list:any
status:string=''
todo_list:any[]=[]
 ngOnInit(){
  if(this.login_service.userid)
  {
  this.service.todo(this.login_service.userid).subscribe((response)=>{
    console.log(response)
    this.todo_list=response.todos
  })
  }
  else
  {
  this.router.navigateByUrl('')
  alert('Please login first')
  }
 }
}
