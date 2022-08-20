import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Task} from "./_models/task";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private http: HttpClient, route: Router) {
  }

  ngOnInit(): void {
  }
}
