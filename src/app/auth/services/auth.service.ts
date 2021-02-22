import {Injectable} from "@angular/core";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {pluck} from 'rxjs/operators';

import {AuthReponseInterface} from "../types/authReponse.interface";
import {LoginRequestInterface} from "../types/loginRequest.interface";

@Injectable()

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>  {
      const url = environment.apiUrl + '/users';
      return this.http.post<AuthReponseInterface>(url, data).pipe(pluck('user'));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface>  {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<AuthReponseInterface>(url, data).pipe(pluck('user'));
  }

}
