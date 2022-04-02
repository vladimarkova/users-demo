import { createAction, props } from "@ngrx/store"
import { IUser } from "src/app/users/user.model";

export const getUsers = createAction('[USER] Get Users');
export const getUsersSuccess = createAction('[USER] Get Users Success', (users: ReadonlyArray<IUser>) => ({ users }));
export const addUser = createAction('[USER] Add User', (user: IUser) => ({ user }));
export const removeUser = createAction('[USER] Remove User', (user: IUser) => ({ user }));
export const addUserSuccess = createAction('[USER] Add User Success', (user: IUser) => ({ user }));
export const addUserFailure = createAction('[USER] Add User Failure');
