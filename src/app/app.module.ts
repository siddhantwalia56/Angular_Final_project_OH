import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './todo-list/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
