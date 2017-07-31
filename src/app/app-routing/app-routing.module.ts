import { ClassementFormComponent } from 'app/classement/classement-form/classement-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListeQuestionComponent } from 'app/questions/liste-question/liste-question.component';
import { UserComponent } from 'app/users/user/user.component';
import { CreationComponent } from 'app/creation/creation/creation.component';
import { CategorieFormComponent } from 'app/categories/categorie-form/categorie-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'random', component: ListeQuestionComponent },
  { path: 'profile', component: UserComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'classement', component: ClassementFormComponent },
  { path: 'categorie', component: CategorieFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
