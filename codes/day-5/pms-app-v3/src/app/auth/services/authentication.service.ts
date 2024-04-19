import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/apiresponse';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  constructor(private _http: HttpClient) { }

  registerUser(user: User): Observable<ApiResponse<User>> {
    return this._http.post<ApiResponse<User>>('http://127.0.0.1:3000/auth/register', user)
  }

  authenticateUser(user: User) {
    return this._http.post<ApiResponse<string>>('http://127.0.0.1:3000/auth/authenticate', user)
  }

}
