import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';


import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HttpClientModule }    from '@angular/common/http';
import { ArticleService } from './article.service';
import { AddArticlesComponent } from './add-articles/add-articles.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModifarticleComponent } from './modifarticle/modifarticle.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    AddArticlesComponent,
    ModifarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
