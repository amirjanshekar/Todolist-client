import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {TasksComponent} from "./tasks/tasks.component";
import {RegisterComponent} from "./register/register.component";
import {AddTaskComponent} from "./add-task/add-task.component";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"tasks", component: TasksComponent},
  {path:"addtask", component: AddTaskComponent},
  {path:"", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
