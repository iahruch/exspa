import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './components/register/register.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../../environments/environment'
import { reducer } from './store/reducers'

const routers = [{ path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers),

    StoreModule.forFeature('auth', reducer),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class AuthModule {}
