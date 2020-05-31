import { Component, OnInit } from '@angular/core';
import { article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifarticleComponent implements OnInit {

  article: article;
//  art: article;

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

  ModifArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.art = {
    //   ID: id,
    //   Titre: "",
    //   Contenu: "",
    //   UtilisateurID: 1
    // };
    console.log("TESTTTTTTTTTTTT" + this.article);
    this.service.ModifArticle(this.article[0]).subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }
}
