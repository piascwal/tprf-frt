import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/model/question.model';
import { QuestionsService } from 'app/questions/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
libQuestion: string;
edited = false;
@Input() question: Question;


  constructor(private questionsService: QuestionsService) {
   }

  ngOnInit() {
     this.libQuestion = 'Tu préfères ' + this.question.libA + ' ou ' + this.question.libB + '?'  ;
  }

  clicked(value: number) {
     console.log(value);
     this.question.nbVotes += 1;
     if (value === 0) {
        this.question.nbVotesA += 1;
     } else if (value === 1) {
        this.question.nbVotesB += 1;
     }

      this.questionsService.save(this.question);
      this.edited = true;
  }

   cli(){
      console.log('holla');
   }

}
