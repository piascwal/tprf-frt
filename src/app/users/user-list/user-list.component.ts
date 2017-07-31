import { User } from './../../model/user.model';
import { UsersService } from 'app/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(response => this.users = response);
  }

  removeUser(id: number) {
     this.usersService.removeUser(id).subscribe(response => console.log(response));
  }

}
