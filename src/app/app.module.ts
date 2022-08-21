import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component'
import {FormsModule} from "@angular/forms";
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TasksComponent,
    RegisterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
