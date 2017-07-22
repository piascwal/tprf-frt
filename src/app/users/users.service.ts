import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from 'app/model/user.model';

@Injectable()
export class UsersService {
  usersUrl = 'http://localhost:3000/users';
  constructor(private http: Http) { }

  

  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}?_expand=categorie&_expand=user`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
