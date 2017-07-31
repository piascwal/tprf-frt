import { Component, OnInit } from '@angular/core';
import { Classement } from 'app/model/classement.model';
import { ClassementService } from "app/classement/classement.service";
import { User } from "app/model/user.model";

@Component({
  selector: 'app-classement-form',
  templateUrl: './classement-form.component.html',
  styleUrls: ['./classement-form.component.css']
})
export class ClassementFormComponent implements OnInit {

  submitted =false;
  classement= new Classement();
  dureeSelected: String;
  durees: string[] = ['1 h', '1 jour', '1 semaine', '1 mois', 'T\'as pas mieux'];

  debutSelected: String;
  debuts: string[] = ['Right Now', 'Ce soir minuit', 'Demain 9h', 'T\'as pas mieux'];
  constructor( private classementService: ClassementService) { }

  ngOnInit() {

  }

  onClickDuree(duree: String) {
    this.dureeSelected = duree;
  }

  onClickDebut(debut: String) {
    this.debutSelected = debut;
  }

  onSubmit(){
    //TODO : Calculer les dates
    this.classement.dateDebut = new Date();
    this.classement.dateFin =  new Date();
    this.classement.dateFin.setHours(this.classement.dateFin.getHours() + 24) ;
    let user = new User("prénom","nom","email");
    this.classement.createur = user;
    console.log(this.classement);
    this.classementService.createClassement(this.classement).subscribe(response => console.log(response));
    this.submitted = true;
  }

}
