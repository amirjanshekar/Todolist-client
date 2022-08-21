import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Task} from "../_models/task";
import {parse} from "@angular/compiler/src/render3/view/style_parser";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  task = {title: '', description: '', date: 0, userId: JSON.parse(localStorage.getItem('user')).id}
  message: string = ""

  ngOnInit(): void {
  }

  converter(e) {
    return parseInt(e)
  }


  sendTask() {
    console.log(this.task)
    this.http.post('https://localhost:5001/api/Task/AddTask', this.task).subscribe(res => {
      console.log(res)
      this.message = "Task Added..."
      setTimeout(() => {
        this.router.navigateByUrl('/tasks')
      }, 2000)
    })
  }

}
