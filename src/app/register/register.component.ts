import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RegisterRequest} from "../_models/RegisterRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  data: RegisterRequest = {username: '', password: ''}
  message: string = ""

  ngOnInit(): void {
  }

  sendUser(){
    this.http.post('https://localhost:5001/api/Auth/Register', this.data).subscribe(res =>{
      this.message = "Registered!"
      setTimeout(()=>{
        this.router.navigateByUrl('login')
      },2000)
    })
  }

}
