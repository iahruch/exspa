import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerAction } from '../../store/actions/register.action'
import { Observable } from 'rxjs'
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors'
import {AuthService} from "../../services/auth.service";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: [],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorInterface>

  constructor(
    private fb: FormBuilder, private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit(): void {
    this.store.dispatch(registerAction({request: {user: this.form.value }}))
  }
}
