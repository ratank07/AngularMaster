import { Action } from "@ngrx/store";
import  * as dataActions  from "./datastate.action";
import { userData } from "./dataNgrx";

  const initialState = {
        "loginId":'ratank',
        'userName':'ratank.skills'
  }

export function dataReducer(state = initialState, action: dataActions.loginDetail) {

  switch(action.type){
    case dataActions.LOGIN_DETAIL :
      return {
        ...state, loginId:[...state.loginId, action.payload]
      }
  }
}

