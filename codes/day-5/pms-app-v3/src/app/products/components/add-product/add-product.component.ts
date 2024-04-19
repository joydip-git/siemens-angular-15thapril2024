import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  // usernameCtrl = new FormControl('enter user name')
  // passwordCtrl = new FormControl('enter password')

  // loginFrm = new FormGroup({
  //   username: this.usernameCtrl,
  //   password: this.passwordCtrl
  // })

  // loginFrm = new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required)
  // })

  loginFrm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.loginFrm = this._builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  get uname() {
    return this.loginFrm.controls['username']
  }
  get pwd() {
    return this.loginFrm.controls['password']
  }

  submit() {
    // console.log(this.usernameCtrl)
    // console.log(this.passwordCtrl)
    console.log(this.loginFrm.value)
  }
}
