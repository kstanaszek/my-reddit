import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];
  @Output() onArticleSelected: EventEmitter<Article>;

  private currentArticle: Article;

  constructor() {
    this.onArticleSelected = new EventEmitter();
  }

  clicked(article: Article): void {
    this.currentArticle = article;
    this.onArticleSelected.emit(article);
  }

  ngOnInit() {
  }

  isSelected(article: Article): boolean {
    if (!article || !this.currentArticle) {
      return false;
    }
    return article.title === this.currentArticle.title;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
