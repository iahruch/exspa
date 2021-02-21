import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../../environments/environment'
import { reducer } from './store/reducers'

import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './components/register/register.component'
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import {PersistanceService} from "../shared/services/persistance.service";

const routers = [{ path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers),

    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
