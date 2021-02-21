import { ActionTypes } from '../actionTypes'
import { createAction, props } from '@ngrx/store'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerActionSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerActionFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorInterface}>()
)
