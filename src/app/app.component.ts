import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user: User;

   ngOnInit() {
     console.log('getById');
     console.log(document.getElementById('FB'));
     console.log('window[FB]');
    window['FB'].api('/me',function(response) {
      console.log('Successful login for: ' + response.name + JSON.stringify(response));
    }
    );
          console.log('localstorage');
     console.log(localStorage);
   }
}
