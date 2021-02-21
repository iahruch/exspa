import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerActionFailure, registerActionSuccess} from "../actions/register.action";
import {catchError, switchMap, map, tap} from "rxjs/operators";
import {of} from "rxjs";

import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {AuthService} from "../../services/auth.service";
import {Route, Router} from "@angular/router";

@Injectable()
export class RegisterEffect {

  registerEffect$ = createEffect( () => this.actions$.pipe(
    ofType(registerAction),
    switchMap( ({request}) => {
      return this.authService.register(request).pipe(
        map( (currentUser: CurrentUserInterface) => {
          this.persistanceService.set('accessToken', currentUser.token)
          return registerActionSuccess({currentUser})
        }),
        catchError( (errorResponse: HttpErrorResponse) => of(registerActionFailure({errors: errorResponse.error.errors})))
      )
    })
  ));

  redirectAfterSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(registerActionSuccess),
    tap( () => {
      this.router.navigate(["/"])
    })
    ),
    {dispatch: false}
  )

   constructor(
     private actions$: Actions,
     private authService: AuthService,
     private persistanceService: PersistanceService,
     private router: Router
   ) { }

}
