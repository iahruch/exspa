import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerAction } from '../../store/actions/register.action'
import { Observable } from 'rxjs'
import { isSubmittingSelector } from '../../store/selectors'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: [],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit(): void {
    this.store.dispatch(registerAction({ user: this.form.value }))
  }
}
