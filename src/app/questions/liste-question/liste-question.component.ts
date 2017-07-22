import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'app/questions/questions.service';
import { Question } from 'app/model/question.model';

@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.css']
})
export class ListeQuestionComponent implements OnInit {
  questions: Question[] = [];
  constructor(private questionService: QuestionsService) { }

  ngOnInit() {

    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
      console.log(this.questionService.getQuestions());
      console.log(this.questions);
  }

}
