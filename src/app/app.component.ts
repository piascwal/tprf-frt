import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user.model';
import { AuthService } from 'app/core/auth.service';
declare var document: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  profile: any;
  userPicture: String;
  user: User;
    constructor(private auth: AuthService) {
      auth.handleAuthentication();


    }
   ngOnInit() {
   }


}
