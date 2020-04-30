import { IUser } from "../../model/userConfig";

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser:null
}
