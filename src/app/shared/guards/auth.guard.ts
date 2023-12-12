// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/service/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const loginRequired = route.data['loginRequired'];
    if(loginRequired === undefined || this.authService.isLogged === loginRequired) return true;
    console.log(route);
    console.log(this.router);
    const currentUrl = route.url.map(url => url.path).join('/');
    return this.router.createUrlTree([`/auth/login`], {queryParams: { currentUrl}});
    // return this.router.createUrlTree(['/auth/login']);
  }
}