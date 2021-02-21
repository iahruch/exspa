import { AuthStateInterface } from '../types/authState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {registerAction, registerActionFailure, registerActionSuccess} from './actions/register.action'
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {BackendErrorInterface} from "../../shared/types/backendError.interface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn:  null,
  validationErrors: null

}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),

  on(
    registerActionSuccess,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),

  on(
    registerActionFailure,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducer(state: AuthStateInterface | undefined, action: Action) {
  return authReducer(state, action)
}
