import { Action } from "@ngrx/store";

import { IUser } from "../../model/userConfig";
// import { type } from 'os';

 export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
            // payload :IUser
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: IUser) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUser | GetUserSuccess | GetUsers | GetUsersSuccess;
