import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    FormSkuComponent,
    FormSkuBuilderComponent,
    UserDemoComponentComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AnalyticsDemoModule
  ],
  providers: [
    UserService,
    {provide: 'API_URL', useValue: 'www.google.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
