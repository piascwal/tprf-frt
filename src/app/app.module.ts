import { UsersService } from './users/users.service';
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
import { CategorieService } from 'app/categories/categorie.service';
import { UserFormComponent } from './users/user-form/user-form.component';
import { CategorieFormComponent } from 'app/categories/categorie-form/categorie-form.component';
import { UserListComponent } from 'app/users/user-list/user-list.component';
import { ClassementFormComponent } from 'app/classement/classement-form/classement-form.component';
import { ClassementService } from 'app/classement/classement.service';
import { AuthService } from 'app/core/auth.service';
import { CallbackComponent } from 'app/core/callback/callback.component';
import { UserDetailComponent } from 'app/users/user-detail/user-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ListeQuestionComponent,
    QuestionComponent,
    UserComponent,
    CreationComponent,
    UserFormComponent,
    CategorieFormComponent,
    UserListComponent,
    ClassementFormComponent,
    CallbackComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QuestionsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [QuestionsService, CategorieService,UsersService, ClassementService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
