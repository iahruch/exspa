import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerActionFailure, registerActionSuccess} from "../actions/register.action";
import {catchError, switchMap, map, tap} from "rxjs/operators";
import {of} from "rxjs";

import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {loginAction, loginActionFailure, loginActionSuccess} from "../actions/login.action";

@Injectable()
export class LoginEffect {

  loginEffect$ = createEffect( () => this.actions$.pipe(
    ofType(loginAction),
    switchMap( ({request}) => {
      return this.authService.login(request).pipe(
        map( (currentUser: CurrentUserInterface) => {
          this.persistanceService.set('accessToken', currentUser.token)
          return loginActionSuccess({currentUser})
        }),
        catchError( (errorResponse: HttpErrorResponse) => of(loginActionFailure({errors: errorResponse.error.errors})))
      )
    })
  ));

  redirectAfterSuccess$ = createEffect( () => this.actions$.pipe(
    ofType(loginActionSuccess),
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
