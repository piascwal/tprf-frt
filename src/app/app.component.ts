import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user.model';
import { AuthService } from "app/core/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user: User;
    constructor(private auth: AuthService){
      auth.handleAuthentication();
    }
   ngOnInit() {
     console.log('getById');
     console.log(document.getElementById('FB'));
     console.log('window[FB]');
     console.log('localstorage');
     console.log(localStorage);
   }
}
