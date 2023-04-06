import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'todo', component:TodoListComponent
  },
  {
    path: 'logout', component:LogoutComponent
  },
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
