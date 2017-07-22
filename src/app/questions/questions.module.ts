import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { ListeQuestionComponent } from './liste-question/liste-question.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
})
export class QuestionsModule { }
