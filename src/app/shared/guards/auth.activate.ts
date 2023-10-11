import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "../../services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
        const authRequired = route.data['authRequired'];
        if(authRequired == undefined || this.authService.isLoggedIn == authRequired) return true;
        // saving the current url so when we redirect to login after login we are redirected to the page where we were
        // const currentUrl = route.url;
        const returnUrl = route.url.map(u => u.path).join('/');
        return this.router.createUrlTree([`/auth/login`], { queryParams: { returnUrl }});
        // return this.router.createUrlTree(['/auth/login']);
    }
}