import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { ModifarticleComponent } from './modifarticle/modifarticle.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/add', component: AddArticlesComponent },
  { path: 'articles/update/:id', component: ModifarticleComponent },
  { path: 'articles/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
