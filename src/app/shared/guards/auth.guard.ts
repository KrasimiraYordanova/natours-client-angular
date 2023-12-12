import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/service/auth.service";


import { CanActivateFn } from '@angular/router';

export function authGuard(): CanActivateFn {
  return (route, state) => {
    const authService:  AuthService = inject(AuthService);
    const router: Router = inject(Router);
    
    const loginRequired = route.data['loginRequired'];
    if(loginRequired === undefined || authService.isLogged === loginRequired) return true;
    
    const currentUrl = route.url.map(url => url.path).join('/');
    return router.createUrlTree([`/auth/login`], {queryParams: { currentUrl}});
  }
};



// USING CLASS
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

//     const loginRequired = route.data['loginRequired'];
//     if(loginRequired === undefined || this.authService.isLogged === loginRequired) return true;
//     console.log(route);
//     console.log(this.router);
//     const currentUrl = route.url.map(url => url.path).join('/');
//     return this.router.createUrlTree([`/auth/login`], {queryParams: { currentUrl}});
//     // return this.router.createUrlTree(['/auth/login']);
//   }
// }