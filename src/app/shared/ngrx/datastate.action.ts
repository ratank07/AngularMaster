import { Action } from "@ngrx/store";
export const LOGIN_DETAIL = 'LOGIN_DETAIL';
import { userData } from "./dataNgrx";
import { userInfo } from 'os';
export class loginDetail implements Action {
  readonly type = LOGIN_DETAIL;
  payload: userData;
  constructor(public playload:any) {
         this.payload ;
  }
  // payload: object;
}
