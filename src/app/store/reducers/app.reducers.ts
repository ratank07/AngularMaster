import { ActionReducerMap } from "@ngrx/store";
import { RouterState, routerReducer } from "@ngrx/router-store";
import { IAppState } from "../state/app.state";
import { configReducers } from "./config.reducers";
import { userReducer } from "./user.reducers";

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer,
  config: configReducers
}
