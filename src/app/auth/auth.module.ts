import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../../environments/environment'
import { reducer } from './store/reducers'

import {AuthService} from "./services/auth.service";

import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";

import { RegisterComponent } from './components/register/register.component'
import {PersistanceService} from "../shared/services/persistance.service";
import {LoginComponent} from "./components/login/login.component";
import {LoginEffect} from "./store/effects/login.effect";

const routers = [{ path: 'register', component: RegisterComponent }, {path: 'login', component: LoginComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers),

    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  exports: [],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
