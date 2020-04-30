import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { IAppState } from "../state/app.state";
import { GetUser, GetUserSuccess, GetUsersSuccess,GetUsers, EUserActions } from "../actions/user.actions";
import { ComponentService } from "../../component/component.service";
// import {  } from "../../model/";
import { selectUserList } from "../selectors/user.selectors";

@Injectable()
  export class UserEffects {
    // @Effect()
    // getUser$ = this._action$.pipe(
    //     ofType<GetUser>(EUserActions.GetUser),
    //     map(action => action.payload)
    // )
  }
