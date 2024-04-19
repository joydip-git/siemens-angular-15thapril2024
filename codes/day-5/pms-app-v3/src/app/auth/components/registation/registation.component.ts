import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrl: './registation.component.css'
})
export class RegistationComponent {

  registrationForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.registrationForm = this._builder.group({
      username: ['enter user name', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get username() {
    return this.registrationForm.get('username')
  }
  get password() {
    return this.registrationForm.get('password')
  }
}
