import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from './user.model';
import { UserState } from '../store/reducers/user.reducer';

import { getUsers, addUser, addUserSuccess, addUserFailure, removeUser } from '../store/actions/user.action';
import { userSelector, usersByStatusSelector } from '../store/selector/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: IUser[] = [];
  users$ = this.store.pipe(select(userSelector));
  user = '';
  st = '';

  constructor(private userService: UserService, private store: Store<UserState>) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(data => this.users = data);

    this.store.dispatch(getUsers());

    setTimeout(() => {
      this.users$ = this.store.select(usersByStatusSelector('online'));
    }, 5000);
  }

  addUser() {
    const newUser = { name: this.user, st: this.st };
    // this.userService.addUser(newUser).subscribe((newUser) => this.users.push(newUser));

    this.store.dispatch(addUser(newUser));

    this.user = '';
    this.st = '';
  }

  deleteUser(user: IUser) {
    // this.userService.deleteUser(user).subscribe(() => (this.users = this.users.filter((u) => u.id !== user.id)));
    this.store.dispatch(removeUser(user));
  };

}
