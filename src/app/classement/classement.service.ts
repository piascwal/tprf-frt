import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { User } from 'app/model/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Classement } from 'app/model/classement.model';

@Injectable()
export class ClassementService {
  private urlEncodeHeader = new Headers({ 'Content-Type': 'application/json' });
  private classementUrl = 'http://localhost:8080/classements';

  constructor(private http: Http) { }

  getClassement(id: number): Observable<Classement> {
    const url = `${this.classementUrl}/${id}`;
    return this.http.get(url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  createClassement(classement: Classement) {
    return this.http.post(this.classementUrl, classement, { headers: this.urlEncodeHeader })
          .catch(this.handleError);
  }

  getAllClassements(): Observable<Classement[]> {
    return this.http.get(this.classementUrl).map(response => response.json())
    ._catch(this.handleError);
  }

    removeClassement(id: number) {
      const url = `${this.classementUrl}/${id}`;
      return this.http.delete(url, { headers: this.urlEncodeHeader } )
      ._catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
