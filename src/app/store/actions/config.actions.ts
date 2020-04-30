import { Action } from "@ngrx/store";

import { IConfig } from "../../model/userConfig";
// import { type } from 'os';

 export enum EConfigActions {
  GetConfig = '[User] Get Users',
  GetConfigSuccess = '[User] Get users Success'
}

export class GetConfig implements Action {
    public readonly type = EConfigActions.GetConfig
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
