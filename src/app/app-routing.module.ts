import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditTaskComponent } from './todo-list/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo-list/todo-list.module').then(x => x.TodoListModule, )
  },
  {
    path: 'logout', component:LogoutComponent
  },
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
