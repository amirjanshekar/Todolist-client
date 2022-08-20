import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";
import {LoginRequest} from "../_models/loginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }

  data: LoginRequest = {
    username : "",
    password: ""
  };

  getUsers() {
    this.http.post("https://localhost:5001/api/Auth/Login", this.data).subscribe(res => {
        localStorage.setItem("user", JSON.stringify(res))
        this.router.navigateByUrl('/tasks')
      }
    )
  }

  ngOnInit(): void {
    if (localStorage.getItem("user")){
      this.router.navigateByUrl('/tasks')
    }
  }

}
