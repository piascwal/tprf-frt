import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Question } from 'app/model/question.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionsService {
  questionsUrl = 'http://localhost:3000/questions';
  constructor(private http: Http) { }

  getQuestion(id: number): Promise<Question> {
    const url = `${this.questionsUrl}/${id}?_expand=categorie&_expand=user`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Question)
      .catch(this.handleError);
  }

  getQuestions(): Promise<Array<Question>> {
    return this.http
      .get(`${this.questionsUrl}/?_expand=categorie&_expand=user`)
      .toPromise()
      .then((response) => {
        return response.json() as Question[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  private put(question: Question): Promise<Question> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.questionsUrl}/${question.id}`;

    return this.http
      .put(url, JSON.stringify(question), { headers: headers })
      .toPromise()
      .then(() => question)
      .catch(this.handleError);
  }



  private post(question: Question): Promise<Question> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.questionsUrl, JSON.stringify(question), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  save(question: Question): Promise<Question> {
    if (question.id) {
      return this.put(question);
    }
    return this.post(question);
  }
}
