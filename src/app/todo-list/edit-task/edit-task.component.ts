import { Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TodoService } from 'src/app/shared/todo.service';
import { TodoListComponent } from '../todo-list.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  updated_task:string=''
  status:any
constructor(public todo_service: TodoService, private router: Router, private todo: TodoListComponent){
  this.todo.parent=false;
  // console.log(todo_service.todo_list[this.todo_service.todo_index].id)
}
Updated(){
  console.log(this.status)
  this.todo_service.edit_task(this.todo_service.todo_list[this.todo_service.todo_index].id,this.updated_task,this.status)
  .subscribe((response)=>{
    console.log(response)
    this.todo_service.todo_list[this.todo_service.todo_index]=response
  })
  this.todo.parent=true;
  this.router.navigateByUrl('todo')
}
Cancel(){
  this.todo.parent=true;
  this.router.navigateByUrl('todo')
}

}
