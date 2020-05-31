import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { article } from '../article';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  form: FormGroup;
  article: article;


  AddArtcile = new FormGroup({
    ID: new FormControl(''),
    Titre: new FormControl(''),
    Contenu: new FormControl(''),
    UtilisateurID: new FormControl(''),
  });

  constructor(public fb: FormBuilder, private service: ArticleService) {
    this.form = this.fb.group({
      ID: [''],
      Titre: [''],
      Contenu: [''],
      UtilisateurID: ['']
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log("test", this.form.get('ID').value);
    this.service.addArticle(this.form).subscribe(article => console.log(article));

  }
}
