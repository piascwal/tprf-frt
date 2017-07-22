import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsModule } from 'app/questions/questions.module';
import { QuestionComponent } from 'app/questions/question/question.component';
import { QuestionsComponent } from 'app/questions/questions.component';
import { ListeQuestionComponent } from 'app/questions/liste-question/liste-question.component';
import { QuestionsService } from 'app/questions/questions.service';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { UserComponent } from './users/user/user.component';
import { CreationComponent } from './creation/creation/creation.component';
import { CategorieService } from 'app/categorie/categorie.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ListeQuestionComponent,
    QuestionComponent,
    UserComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [QuestionsService, CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
