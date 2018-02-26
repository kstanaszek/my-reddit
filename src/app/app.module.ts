import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuBuilderComponent } from './form-sku-builder/form-sku-builder.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UserDemoComponentComponent } from './user-demo-component/user-demo-component.component';
import { UserService } from './services/user-service';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/search-result.component';
import { SearchBoxComponent } from './you-tube-search/search-box.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'sku', component: FormSkuComponent },
  { path: 'skubuilder', component: FormSkuBuilderComponent },
  { path: 'signin', component: UserDemoComponentComponent },
  { path: 'basicrequest', component: SimpleHttpComponent },
  { path: 'youtubesearch', component: YouTubeSearchComponent},
  { path: 'search', redirectTo: 'youtubesearch'}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    FormSkuComponent,
    FormSkuBuilderComponent,
    UserDemoComponentComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AnalyticsDemoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    { provide: 'API_URL', useValue: 'www.google.com' },
    { provide: 'APP_BASE_HREF', useValue: '/' } ,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
