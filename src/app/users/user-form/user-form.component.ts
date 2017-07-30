import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user.model';
import { UsersService } from 'app/users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model = new User('Jean', 'Dupont', 'jean.dupont@gmail.com');

  submitted = false;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }


  newUser() {
    console.log(this.model);
  }

  onSubmit() { 
    this.userService.createUser(this.model).subscribe(response => console.log(response));
    this.submitted = true; }

}
