import { EUserActions } from "./../actions/user.actions";
import { UserActions } from "../actions/user.actions";
import { initialUserState, IUserState } from "../state/user.state";
// import { Action } from 'rxjs/internal/scheduler/Action';


export const userReducer = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch(action.type) {
    case EUserActions.GetUsersSuccess: {
      return { ...state, users: action.payload}
    }
    case EUserActions.GetUserSuccess : {
      return {
        ...state, selectedUser: action.payload
      }
    }
    default: return state;
  }
}
