import { Component, OnInit, Input } from '@angular/core';
import { article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: article;

  constructor(
    private route: ActivatedRoute,
    private service: ArticleService,
    private location: Location) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

  DeleteArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.deleteArticle(id).subscribe(article => console.log(article));
  }
}
