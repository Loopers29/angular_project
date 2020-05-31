import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { article } from './article';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: article;
  constructor(private httpclient: HttpClient) { }

  getArticles(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/articles/");
  }

  getArticle(id: number): Observable<any> {
    return this.httpclient.get("http://localhost:3000/articles/" + id);
  }

  deleteArticle(id: number): Observable<any> {
    return this.httpclient.delete("http://localhost:3000/articles/" + id);
  }

  ModifArticle(art: article): Observable<any> {
    return this.httpclient.post("http://localhost:3000/articles/update", art);
  }

  addArticle(form: FormGroup): Observable<any> {
    this.article = {
      ID: form.get('ID').value,
      Titre: form.get('Titre').value,
      Contenu: form.get('Contenu').value,
      UtilisateurID: form.get('UtilisateurID').value
    }
    return this.httpclient.post("http://localhost:3000/articles/", this.article);
  }
}
