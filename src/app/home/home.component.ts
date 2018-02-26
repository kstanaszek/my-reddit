import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular Homepage', 'http://angular.io', 1),
      new Article('Hadoop Homepage', 'http://hadoop.apache.org/', 10)
    ];

   }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  articleWasSelected(article: Article): void {
    console.log('Article clicked: ', article);
  }
}
