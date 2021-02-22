import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {registerAction} from "../../store/actions/register.action";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorInterface>
  form: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private authService: AuthService

  ){ }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeForm()
  }
  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  submit() {
    this.store.dispatch(loginAction({request: {user: this.form.value}}))
  }
}
