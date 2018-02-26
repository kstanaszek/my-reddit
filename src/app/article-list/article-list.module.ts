import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    ActivatedRoute,
    Router,
    Routes
  } from '@angular/router';
import { ArticleComponent } from '../article/article.component';

export const routes: Routes = [
    {path: 'article', component: ArticleComponent}
]

@NgModule({
    declarations: [ArticleComponent],
    imports: [CommonModule, RouterModule],
    providers: [],

})

export class ArticleModule{}