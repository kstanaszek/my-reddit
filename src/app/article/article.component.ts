import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostBinding } from '@angular/core/src/metadata/directives';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }
}
