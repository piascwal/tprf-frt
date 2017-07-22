import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'app/categorie/categorie.service';
import { Categorie } from 'app/model/categorie.model';
import { Question } from 'app/model/question.model';
import { QuestionsService } from 'app/questions/questions.service';
import { User } from 'app/model/user.model';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  categories: Categorie[] = [];
  selectedCat: Categorie;
  libA: string;
  libB: string;

  constructor(private categorieService: CategorieService, private questionsServices: QuestionsService) { }

  ngOnInit() {
     this.categorieService.getCategories()
     .then(categories => this.categories = categories);

  }

  postQuestion(): void {
    console.log('test');
    let question = new Question();
     question.userId = 1;
    question.categorieId = this.selectedCat.id;
    question.libA = this.libA;
    question.libB = this.libB;
    question.nbVotes = 0;
    question.nbVotesA = 0;
    question.nbVotesB = 0;

     this.questionsServices.save(question);
  }
}
