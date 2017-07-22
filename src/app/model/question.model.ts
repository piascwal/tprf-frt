import { Input } from '@angular/core/core';
import { User } from 'app/model/user.model';
import { Categorie } from 'app/model/categorie.model';

export class Question {
    id: number;
    libA: string;
    libB: string;
    categorie: Categorie;
    user: User;
    nbVotes: number;
    nbVotesA: number;
    nbVotesB: number;
    userId: number;
    categorieId: number;
}