import { Component, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  private sub?: Subscription;

  constructor(private authsvc: AuthenticationService) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  login(frm: NgForm) {
    const loginForm: FormGroup = frm.form
    const user = <User>loginForm.value
    this.authsvc
      .authenticateUser(user)
      .subscribe({
        next: (response) => {
          if (response.data != null) {

          } else {

          }
        },
        error: (e) => {

        }
      })
  }
}
