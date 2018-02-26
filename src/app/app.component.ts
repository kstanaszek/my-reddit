import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) {
  }
  

}
