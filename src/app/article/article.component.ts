import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Article } from './article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'item';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']});
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
    if(!this.article){
      this.article = new Article("Child article", "www.angular.id", this.id);
    }
  }
}

