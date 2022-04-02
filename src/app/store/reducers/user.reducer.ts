import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/users/user.model";
import { getUsers, addUser, addUserSuccess, addUserFailure, removeUser, getUsersSuccess } from "../actions/user.action";

export interface UserState {
  readonly users: IUser[];
};

const initialState: IUser[] = [];

export const userReducer = createReducer(initialState,
  on(getUsersSuccess, (state, { users }) => [...users]),
  on(addUserSuccess, (state, { user }) => [...state, user])
);

const mockUsers: IUser[] = [
  {
    id: '1',
    name: 'George',
    st: 'online'
  },
  {
    id: '2',
    name: 'Mary',
    st: 'online'
  },
  {
    id: '3',
    name: 'Linda',
    st: 'offline'
  }
];
