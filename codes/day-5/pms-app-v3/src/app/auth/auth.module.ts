import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistationComponent } from './components/registation/registation.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegistationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthenticationService]
})
export class AuthModule { }
