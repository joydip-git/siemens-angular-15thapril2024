import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrength } from '../../validators/passwordstrength';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../models/user';
import { Subscription, elementAt } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registation',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnDestroy {

  registrationForm: FormGroup;
  private sub?: Subscription;

  constructor(
    private _builder: FormBuilder,
    private authsvc: AuthenticationService,
    private _router: Router
  ) {
    this.registrationForm = this._builder.group({
      username: ['enter user name', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrength]]
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  get username() {
    return this.registrationForm.get('username')
  }
  get password() {
    return this.registrationForm.get('password')
  }

  register() {
    if (confirm('Confirm Submission?')) {
      const user = <User>this.registrationForm.value
      this.authsvc
        .registerUser(user)
        .subscribe({
          next: (response) => {
            alert(response.message)
            if (response.data != null) {
              this._router.navigate(['/login'])
            }
          },
          error: (e) => {

          }
        })
    }
  }
}
