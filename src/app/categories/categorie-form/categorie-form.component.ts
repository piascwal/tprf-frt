import { Component, OnInit } from '@angular/core';
import { Categorie } from 'app/model/categorie.model';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  categorie: Categorie;
  constructor() { 
    this.categorie = new Categorie();
  }

  ngOnInit() {
  }

}
