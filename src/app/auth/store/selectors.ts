import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'
import { AppStateInterface } from '../../shared/types/appState.interface'

const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors
)
