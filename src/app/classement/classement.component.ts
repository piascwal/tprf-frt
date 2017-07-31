import { Component, OnInit } from '@angular/core';
import { Classement } from 'app/model/classement.model';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  classement= new Classement();
  dureeSelected: String;
  durees: string[] = ['1 h', '1 jour', '1 semaine', '1 mois', 'T\'as pas mieux'];

  debutSelected: String;
  debuts: string[] = ['Right Now', 'Ce soir minuit', 'Demain 9h', 'T\'as pas mieux'];
  constructor() { }

  ngOnInit() {

  }

  onClickDuree(duree: String) {
    this.dureeSelected = duree;
  }

  onClickDebut(debut: String) {
    this.debutSelected = debut;
  }

  onSubmit(){
    this.classement.dateDebut = new Date();
    this.classement.dateFin =  new Date();
    this.classement.dateFin.setHours(this.classement.dateFin.getHours() + 24) ;
    console.log(this.classement);


  }

}
