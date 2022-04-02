import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType} from "@ngrx/effects";
import { map, exhaustMap, concatMap } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";
import { addUser, getUsers, getUsersSuccess, addUserSuccess } from "../actions/user.action";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.action$.pipe(
    ofType(getUsers),
    exhaustMap(() => this.userService.getUsers().pipe(
      map((users) => getUsersSuccess(users))
    ))
  ));

  addUser$ = createEffect(() => this.action$.pipe(
    ofType(addUser),
    concatMap(({ user }) => this.userService.addUser(user).pipe(
      map((user) => addUserSuccess(user))
    ))
  ));

  constructor(private action$: Actions, private userService: UserService) {}
};
