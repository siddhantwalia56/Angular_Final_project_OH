import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoListComponent, EditTaskComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule
  ]
})
export class TodoListModule { }
