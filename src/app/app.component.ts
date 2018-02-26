import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(private router: Router) {
    this.articles = [
      new Article('Angular Homepage', 'http://angular.io', 1),
      new Article('Hadoop Homepage', 'http://hadoop.apache.org/', 10)
    ];
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
