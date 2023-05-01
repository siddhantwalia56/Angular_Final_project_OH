import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { LoginService } from '../shared/login.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
constructor(public todo_service: TodoService, public login_service: LoginService, private router:Router, private route: ActivatedRoute){this.parent=true}
list:any
status:any='all'
new_task:any
show_user_detail=false
parent:any
list_of_tasks:any[]=[]

 ngOnInit(){
  if(this.login_service.userid)
  {
  this.todo_service.todo(this.login_service.userid).subscribe((response)=>{
    this.todo_service.todo_list=response.todos
    this.list_of_tasks=this.todo_service.todo_list
  })
  }

  else
  {
  this.router.navigateByUrl('')
  alert('Please login first')
  }
 }

 edit_task(index:number){
    this.todo_service.todo_index=index
    this.router.navigate(['edit'],{relativeTo: this.route})
 }

 logout(){
  this.router.navigate(['logout'])
  this.login_service.userid=''
 }

 Add_task(){
  this.todo_service.task_add(this.new_task).subscribe((response)=>{
    this.todo_service.todo_list.push(response)
  })
  this.new_task=''
 }

 all(){
  this.status='all'
 }
 completed(){
  this.status=true
 }

 pending(){
  this.status=false
 }

 user_detail(){
  this.show_user_detail=!this.show_user_detail
 }
}
