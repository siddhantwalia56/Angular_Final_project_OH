import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
const routes: Routes = [
  {
    path: '', component: TodoListComponent,children:[
      {
        path:'edit', component:EditTaskComponent
      }
    ]
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
