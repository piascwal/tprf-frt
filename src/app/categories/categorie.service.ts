import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Categorie } from 'app/model/categorie.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategorieService {
categoriesUrl = 'http://localhost:3000/categories';
  constructor(private http: Http) { }


  getCategories(): Promise<Array<Categorie>> {
    return this.http
    .get(this.categoriesUrl)
    .toPromise()
    .then((response) => {
            return response.json() as Categorie[];
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
