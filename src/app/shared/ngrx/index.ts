import * as fromreducer from "./datastate.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { dataReducer } from './datastate.reducer';

export interface DataState {
  userdata: fromreducer.userData
}
