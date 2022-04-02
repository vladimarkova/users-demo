import { createSelector } from "@ngrx/store";
import { IUser } from "src/app/users/user.model";
import { UserState } from "../reducers/user.reducer";

export const userSelector = createSelector(
  (state: UserState) => state.users,
  (users: ReadonlyArray<IUser>) => users
);

export const usersByStatusSelector = (st: string) =>
  createSelector(userSelector, (users) => {
    return users.filter(user => user.st === st);
  });
