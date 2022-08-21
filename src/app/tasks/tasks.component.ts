import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  user: User = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
  tasks: any = [];
  dayOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",]

  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.getTasks()
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  getTasks() {
    let userId: number = this.user.id
    this.http.get(`https://localhost:5001/api/Task/${userId}`).subscribe(
      res => this.tasks = res,
      error => console.log(error)
    )
  }

  logOut() {
    localStorage.removeItem("user")
    this.router.navigateByUrl('/login')
  }

  converter(e) {
    return parseInt(e)
  }

  done(checked){
    let task = this.tasks.filter(e => e.id === checked)
    if (task[0].isChecked){
      return "done"
    }
    else{
      return "undone"
    }
  }

  setCheck(id){
    let userId: number = this.user.id
    this.http.put(`https://localhost:5001/api/Task/${userId}/${id}`, null).subscribe(
      res => this.done(id)
    )
  }

  deleteTask(id){
    let userId: number = this.user.id
    this.http.delete(`https://localhost:5001/api/Task/${userId}/${id}`).subscribe(
      res => this.getTasks()
    )
  }

  searchTasks(day) {
    if (parseInt(day) === 7){
      this.getTasks()
    }
    else{
      let userId: number = this.user.id
      this.http.get(`https://localhost:5001/api/Task/${userId}/${day}`).subscribe(
        res => this.tasks = res,
        error => console.log(error)
      )
    }
  }

}
