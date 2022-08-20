import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  user: User = JSON.parse(localStorage.getItem("user"))
  tasks: any = [];

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    let userId: number = this.user.id
    this.http.get(`https://localhost:5001/api/Task/${userId}`).subscribe(
      res => this.tasks = res,
        error => console.log(error)
    )
  }

}
