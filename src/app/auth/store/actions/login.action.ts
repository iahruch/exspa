import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";


export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginActionSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const loginActionFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorInterface}>()
)
