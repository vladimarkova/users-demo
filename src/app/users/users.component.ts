import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = []; 
  user = '';
  st = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser() {
    const newUser = { name: this.user, st: this.st };
    this.userService.addUser(newUser).subscribe((newUser) => this.users.push(newUser));
  }

  deleteUser(user: IUser) {
    this.userService.deleteUser(user).subscribe(() => (this.users = this.users.filter((u) => u.id !== user.id)));
  };

}
