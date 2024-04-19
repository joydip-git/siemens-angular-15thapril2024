import { Component, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  private sub?: Subscription;

  constructor(private authsvc: AuthenticationService,
    private currentRoute: ActivatedRoute,
    private _router: Router
  ) {

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
          alert(response.message)
          if (response.data != null) {
            //save the token
            sessionStorage.setItem('token', response.data)

            //redirect
            const snapshot = this.currentRoute.snapshot
            const returnUrl = snapshot.queryParams['returnUrl']
            if (returnUrl && returnUrl != '') {
              this._router.navigate([returnUrl])
            } else {
              this._router.navigate(['/products'])
            }
          }
        },
        error: (e) => {

        }
      })
  }
}
