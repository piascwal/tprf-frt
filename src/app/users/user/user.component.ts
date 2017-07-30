import { UsersService } from './../users.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    //var usertest : User = {"id":1, "firstName":"testfirst", "lastName":"testlast", "email":"yo@yo.com"};
    //this.userService.createUser(usertest).subscribe();
    //this.userService.getUser(1).subscribe(response => console.log(response));
     // this.userService.getUser(1).subscribe(resp => this.user = resp);
  
  }

}
