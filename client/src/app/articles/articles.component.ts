import { Component, OnInit } from '@angular/core';
import { article } from '../article';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  selectedArticle: article;
  Articles: article[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    // this.Articles = this.service.getArticles()
    this.service.getArticles().subscribe(Articles => this.Articles = Articles);
  }
}
