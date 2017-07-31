import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { User } from 'app/model/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
  private urlEncodeHeader = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  createUser(user: User) {
    return this.http.post(this.usersUrl, user, { headers: this.urlEncodeHeader })
          .catch(this.handleError);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl).map(response => response.json())
    ._catch(this.handleError);
  }

    removeUser(id: number) {
      const url = `${this.usersUrl}/${id}`;
      return this.http.delete(url, { headers: this.urlEncodeHeader } )
      ._catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
