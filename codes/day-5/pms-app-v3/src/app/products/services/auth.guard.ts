import { Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {


  const token = sessionStorage.getItem('token')
  if (token)
    return true
  else {
    const router: Router = Inject(Router)
    router.navigate(
      ['/login'],
      {
        queryParams: {
          returnUrl: state.url
        }
      }
    )
    return false
  }
};

/*
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = sessionStorage.getItem('token')
    if (token)
      return true
    else {
      this._router.navigate(
        [
          '/login'
        ],
        {
          queryParams: {
            returnUrl: state.url
          }
        }
      )
      return false
    }
  }

}
*/